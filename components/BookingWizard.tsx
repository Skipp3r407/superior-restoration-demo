"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  Send,
  UserRound
} from "lucide-react";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";
import {
  appointmentSlots,
  bookingServices,
  bookingUrgencies,
  company,
  contactMethods
} from "@/lib/site";

type BookingData = {
  service: string;
  urgency: string;
  propertyType: "Residential" | "Commercial";
  address: string;
  city: string;
  zip: string;
  damageLocation: string;
  description: string;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  requestedDate: string;
  requestedTime: string;
  photoCount: number;
};

const steps = [
  { title: "Service", icon: Send },
  { title: "Urgency", icon: Clock },
  { title: "Property", icon: Home },
  { title: "Customer", icon: UserRound },
  { title: "Schedule", icon: CalendarDays },
  { title: "Photos", icon: Camera }
];

const initialData: BookingData = {
  service: bookingServices[0],
  urgency: bookingUrgencies[0],
  propertyType: "Residential",
  address: "",
  city: "",
  zip: "",
  damageLocation: "",
  description: "",
  name: "",
  phone: "",
  email: "",
  preferredContact: contactMethods[0],
  requestedDate: "",
  requestedTime: appointmentSlots[0],
  photoCount: 0
};

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<BookingData>(initialData);

  const emergency = data.urgency === "Emergency / Need help now";
  const progress = ((step + 1) / steps.length) * 100;

  const adminReadyPayload = useMemo(
    () => ({
      source: "website_booking_wizard",
      status: "new_request",
      customer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        preferredContact: data.preferredContact
      },
      serviceRequest: {
        service: data.service,
        urgency: data.urgency,
        requestedDate: emergency ? null : data.requestedDate,
        requestedTime: emergency ? null : data.requestedTime,
        photoCount: data.photoCount
      },
      property: {
        type: data.propertyType,
        address: data.address,
        city: data.city,
        zip: data.zip,
        damageLocation: data.damageLocation,
        description: data.description
      },
      integrationsReadyFor: [
        "CRM lead",
        "Admin dashboard",
        "Email notification",
        "SMS alert",
        "Stripe deposit",
        "Calendar sync"
      ]
    }),
    [data, emergency]
  );

  function update<K extends keyof BookingData>(key: K, value: BookingData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function next() {
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.5rem] bg-white p-7 shadow-premium ring-1 ring-navy-100 sm:p-10"
          initial={{ opacity: 0, y: 18 }}
        >
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-emerald-500/10 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
            Booking Request Received
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
            Your restoration request has been received.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This is a request, not a confirmed appointment. A team member would
            review the details, prioritize emergencies, and contact the customer
            using the preferred method.
          </p>

          <div className="mt-8 grid gap-4 rounded-[2rem] bg-navy-50 p-5 sm:grid-cols-2">
            <Summary label="Selected service" value={data.service} />
            <Summary label="Urgency" value={data.urgency} />
            <Summary
              label="Requested date/time"
              value={
                emergency
                  ? "Emergency priority callback"
                  : `${data.requestedDate || "Date not selected"} at ${data.requestedTime}`
              }
            />
            <Summary label="Next steps" value="Review, call/text/email, inspection request" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={company.phoneHref} variant="dark">
              Call Now for Emergency
            </ButtonLink>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy-100 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm transition hover:-translate-y-0.5 hover:border-rescue-500 hover:text-rescue-600"
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setData(initialData);
              }}
              type="button"
            >
              Start Another Request
            </button>
          </div>
        </motion.div>

        <aside className="rounded-[2.5rem] bg-navy-950 p-6 text-white shadow-premium">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">
            Admin-Ready Structure
          </p>
          <pre className="mt-5 max-h-[34rem] overflow-auto rounded-3xl bg-white/8 p-4 text-xs leading-6 text-white/72">
            {JSON.stringify(adminReadyPayload, null, 2)}
          </pre>
        </aside>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
      <aside className="glass-card rounded-[2.5rem] p-6 lg:sticky lg:top-28">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
          Request a Booking
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-950">
          Step-by-step restoration intake
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Mobile-first booking request flow for inspections, emergency help, and
          photo-supported damage intake.
        </p>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-rescue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-6 grid gap-3">
          {steps.map((item, index) => {
            const StepIcon = item.icon;
            const active = index === step;
            const complete = index < step;
            return (
              <button
                className={`flex items-center gap-3 rounded-2xl p-3 text-left transition ${
                  active
                    ? "bg-navy-950 text-white shadow-premium"
                    : complete
                      ? "bg-emerald-500/10 text-emerald-700"
                      : "bg-white text-slate-600 ring-1 ring-navy-100"
                }`}
                key={item.title}
                onClick={() => setStep(index)}
                type="button"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/14">
                  <StepIcon className="h-5 w-5" />
                </span>
                <span className="font-black">{item.title}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-[2.5rem] bg-white p-5 shadow-premium ring-1 ring-navy-100 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            initial={{ opacity: 0, x: 18 }}
            key={step}
            transition={{ duration: 0.25 }}
          >
            {step === 0 ? <ServiceStep data={data} update={update} /> : null}
            {step === 1 ? <UrgencyStep data={data} update={update} /> : null}
            {step === 2 ? <PropertyStep data={data} update={update} /> : null}
            {step === 3 ? <CustomerStep data={data} update={update} /> : null}
            {step === 4 ? <ScheduleStep data={data} update={update} emergency={emergency} /> : null}
            {step === 5 ? <PhotoStep data={data} update={update} /> : null}
          </motion.div>
        </AnimatePresence>

        <div className="sticky bottom-20 mt-8 flex gap-3 rounded-3xl border border-navy-100 bg-white/92 p-3 shadow-premium backdrop-blur md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          <button
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-navy-100 bg-white px-5 text-sm font-black text-navy-950 transition hover:border-rescue-500 disabled:cursor-not-allowed disabled:opacity-45"
            disabled={step === 0}
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <button
            className="inline-flex min-h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-rescue-500 px-5 text-sm font-black text-white shadow-glow transition hover:bg-rescue-600"
            onClick={next}
            type="button"
          >
            {step === steps.length - 1 ? "Submit Request" : "Continue"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceStep({
  data,
  update
}: {
  data: BookingData;
  update: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
}) {
  return (
    <StepShell eyebrow="Service Selection" title="What restoration service do you need?">
      <div className="grid gap-3 sm:grid-cols-2">
        {bookingServices.map((service) => (
          <Choice
            active={data.service === service}
            key={service}
            label={service}
            onClick={() => update("service", service)}
          />
        ))}
      </div>
    </StepShell>
  );
}

function UrgencyStep({
  data,
  update
}: {
  data: BookingData;
  update: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
}) {
  return (
    <StepShell eyebrow="Urgency" title="How quickly do you need help?">
      <div className="grid gap-3 sm:grid-cols-2">
        {bookingUrgencies.map((urgency) => (
          <Choice
            active={data.urgency === urgency}
            key={urgency}
            label={urgency}
            onClick={() => update("urgency", urgency)}
          />
        ))}
      </div>
    </StepShell>
  );
}

function PropertyStep({
  data,
  update
}: {
  data: BookingData;
  update: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
}) {
  return (
    <StepShell eyebrow="Property Details" title="Where is the damage located?">
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        {(["Residential", "Commercial"] as const).map((type) => (
          <Choice
            active={data.propertyType === type}
            key={type}
            label={type}
            onClick={() => update("propertyType", type)}
          />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Property address" value={data.address} onChange={(value) => update("address", value)} />
        <Field label="City" value={data.city} onChange={(value) => update("city", value)} />
        <Field label="ZIP code" value={data.zip} onChange={(value) => update("zip", value)} />
        <Field label="Damage location" value={data.damageLocation} placeholder="Kitchen, attic, warehouse..." onChange={(value) => update("damageLocation", value)} />
        <label className="grid gap-2 text-sm font-black text-navy-950 sm:col-span-2">
          Short description of issue
          <textarea
            className="min-h-32 rounded-2xl border border-navy-100 px-4 py-3 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
            onChange={(event) => update("description", event.target.value)}
            placeholder="Briefly describe what happened and what areas are affected."
            value={data.description}
          />
        </label>
      </div>
    </StepShell>
  );
}

function CustomerStep({
  data,
  update
}: {
  data: BookingData;
  update: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
}) {
  return (
    <StepShell eyebrow="Customer Information" title="How should the team contact you?">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" value={data.name} onChange={(value) => update("name", value)} />
        <Field label="Phone" type="tel" value={data.phone} onChange={(value) => update("phone", value)} />
        <Field label="Email" type="email" value={data.email} onChange={(value) => update("email", value)} />
        <label className="grid gap-2 text-sm font-black text-navy-950">
          Preferred contact method
          <select
            className="min-h-12 rounded-2xl border border-navy-100 bg-white px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
            onChange={(event) => update("preferredContact", event.target.value)}
            value={data.preferredContact}
          >
            {contactMethods.map((method) => (
              <option key={method}>{method}</option>
            ))}
          </select>
        </label>
      </div>
    </StepShell>
  );
}

function ScheduleStep({
  data,
  emergency,
  update
}: {
  data: BookingData;
  emergency: boolean;
  update: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
}) {
  return (
    <StepShell eyebrow="Appointment Scheduler" title="Request a preferred inspection window">
      {emergency ? (
        <div className="mb-5 rounded-3xl border border-rescue-500/30 bg-rescue-500/10 p-5 text-navy-950">
          <p className="font-black">Emergency requests are prioritized.</p>
          <p className="mt-2 leading-7 text-slate-600">
            A team member will contact you as soon as possible. This is not a
            confirmed appointment until the team verifies availability.
          </p>
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
        <Field
          label="Preferred date"
          type="date"
          value={data.requestedDate}
          onChange={(value) => update("requestedDate", value)}
        />
        <div>
          <p className="mb-2 text-sm font-black text-navy-950">Available time slots</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {appointmentSlots.map((slot) => (
              <Choice
                active={data.requestedTime === slot}
                key={slot}
                label={slot}
                onClick={() => update("requestedTime", slot)}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-500">
        Available slots are request windows. Calendar sync can be added later
        when backend availability is configured.
      </p>
    </StepShell>
  );
}

function PhotoStep({
  data,
  update
}: {
  data: BookingData;
  update: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
}) {
  return (
    <StepShell eyebrow="Damage Photos" title="Upload damage photos for intake">
      <label className="block cursor-pointer rounded-[2rem] border border-dashed border-navy-200 bg-navy-50 p-8 text-center transition hover:border-rescue-500 hover:bg-rescue-500/5">
        <Camera className="mx-auto h-10 w-10 text-rescue-500" />
        <span className="mt-4 block text-lg font-black text-navy-950">
          Add photos of the affected area
        </span>
        <span className="mt-2 block text-sm leading-6 text-slate-600">
          Photo storage can connect later to CRM, admin dashboard, or cloud
          uploads.
        </span>
        <input
          className="sr-only"
          multiple
          onChange={(event) => update("photoCount", event.target.files?.length ?? 0)}
          type="file"
        />
      </label>
      <div className="mt-5 rounded-3xl bg-navy-950 p-5 text-white">
        <p className="font-black">{data.photoCount} photo(s) selected</p>
        <p className="mt-2 text-sm leading-6 text-white/65">
          Ready to submit as a booking request payload for future automations.
        </p>
      </div>
    </StepShell>
  );
}

function StepShell({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h3>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function Choice({
  active,
  label,
  onClick
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`min-h-14 rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
        active
          ? "bg-navy-950 text-white shadow-premium ring-2 ring-rescue-500"
          : "bg-white text-navy-950 ring-1 ring-navy-100 hover:ring-rescue-500"
      }`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text"
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-navy-950">
      {label}
      <input
        className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-black text-navy-950">{value}</p>
    </div>
  );
}

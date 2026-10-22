"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing,
  CalendarDays,
  CalendarPlus,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  Microscope,
  Send,
  ShieldCheck,
  UserRound
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";
import {
  appointmentSlots,
  bookingServices,
  bookingUrgencies,
  company,
  contactMethods,
  insuranceCarriers,
  moldAreaSizes,
  moldSigns,
  nextStepsTimeline
} from "@/lib/site";

type BookingData = {
  service: string;
  urgency: string;
  moldArea: string;
  signs: string[];
  sensitiveOccupants: boolean;
  wantsTesting: boolean;
  propertyType: "Residential" | "Commercial";
  address: string;
  city: string;
  zip: string;
  damageLocation: string;
  description: string;
  insured: "Yes" | "No" | "Not sure";
  carrier: string;
  claimNumber: string;
  adjusterHelp: boolean;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  requestedDate: string;
  requestedTime: string;
  textReminders: boolean;
  photoCount: number;
};

const steps = [
  { title: "Service", icon: Send },
  { title: "Urgency", icon: Clock },
  { title: "Assessment", icon: Microscope },
  { title: "Property", icon: Home },
  { title: "Insurance", icon: ShieldCheck },
  { title: "Customer", icon: UserRound },
  { title: "Schedule", icon: CalendarDays },
  { title: "Photos", icon: Camera }
];

const initialData: BookingData = {
  service: bookingServices[0],
  urgency: bookingUrgencies[0],
  moldArea: moldAreaSizes[0],
  signs: [],
  sensitiveOccupants: false,
  wantsTesting: true,
  propertyType: "Residential",
  address: "",
  city: "",
  zip: "",
  damageLocation: "",
  description: "",
  insured: "Not sure",
  carrier: insuranceCarriers[0],
  claimNumber: "",
  adjusterHelp: true,
  name: "",
  phone: "",
  email: "",
  preferredContact: contactMethods[0],
  requestedDate: "",
  requestedTime: appointmentSlots[0],
  textReminders: true,
  photoCount: 0
};

type Update = <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;

/** The next 10 bookable days (Sunday is closed). Built when the schedule step first mounts in the browser. */
function upcomingDays() {
  const days: { iso: string; weekday: string; label: string }[] = [];
  const day = new Date();
  while (days.length < 10) {
    day.setDate(day.getDate() + 1);
    if (day.getDay() === 0) continue;
    days.push({
      iso: day.toISOString().slice(0, 10),
      weekday: day.toLocaleDateString("en-US", { weekday: "short" }),
      label: day.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    });
  }
  return days;
}

/** Demo availability: a stable pattern of already-booked windows so the calendar looks like a real schedule. */
function isBooked(dayIndex: number, slotIndex: number) {
  return (dayIndex * 3 + slotIndex * 5) % 7 === 0;
}

function calendarFile(data: BookingData) {
  const [h, m] = data.requestedTime.replace(/ (AM|PM)/, "").split(":").map(Number);
  const hour = data.requestedTime.includes("PM") && h !== 12 ? h + 12 : h;
  const date = data.requestedDate.replaceAll("-", "");
  const stamp = (hh: number) => `${date}T${String(hh).padStart(2, "0")}${String(m).padStart(2, "0")}00`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Superior Restoration//Booking//EN",
    "BEGIN:VEVENT",
    `UID:${stamp(hour)}-${data.requestedTime.replace(/\W/g, "")}@superiorrestorationsfl.com`,
    `DTSTART:${stamp(hour)}`,
    `DTEND:${stamp(hour + 1)}`,
    `SUMMARY:${company.name}: ${data.service} inspection`,
    `LOCATION:${[data.address, data.city, data.zip].filter(Boolean).join(", ")}`,
    `DESCRIPTION:Requested inspection window. ${company.name} will confirm by ${data.preferredContact.toLowerCase()}. Questions: ${company.phone}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
}

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [data, setData] = useState<BookingData>(initialData);

  const emergency = data.urgency === "Emergency / Need help now";
  const mold = data.service.toLowerCase().includes("mold");
  const progress = ((step + 1) / steps.length) * 100;

  const update: Update = (key, value) => setData((current) => ({ ...current, [key]: value }));

  function next() {
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    setReference(`SR-${String(Date.now()).slice(-6)}`);
    setSubmitted(true);
  }

  function downloadCalendar() {
    const blob = new Blob([calendarFile(data)], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "superior-restoration-inspection.ics";
    link.click();
    URL.revokeObjectURL(url);
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
            Request {reference} received
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
            {emergency ? "Help is on the way." : "Your inspection request is in."}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {emergency
              ? "Emergency requests jump the line. Expect a call back right away. If water is still running, shut off the main valve and call us now."
              : `We'll confirm your ${data.requestedTime} window by ${data.preferredContact.toLowerCase()}${data.textReminders ? " and text you a reminder the day before" : ""}.`}
          </p>

          <div className="mt-8 grid gap-4 rounded-[2rem] bg-navy-50 p-5 sm:grid-cols-2">
            <Summary label="Service" value={data.service} />
            <Summary label="Urgency" value={data.urgency} />
            <Summary
              label="Requested window"
              value={emergency ? "Emergency priority callback" : `${data.requestedDate || "Date to confirm"} at ${data.requestedTime}`}
            />
            <Summary
              label="Insurance"
              value={data.insured === "Yes" ? `${data.carrier}${data.adjusterHelp ? " · we'll talk to your adjuster" : ""}` : data.insured}
            />
            {mold ? <Summary label="Affected area" value={data.moldArea} /> : null}
            <Summary label="Photos" value={`${data.photoCount} attached`} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {!emergency && data.requestedDate ? (
              <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-rescue-500"
                onClick={downloadCalendar}
                type="button"
              >
                <CalendarPlus className="h-4 w-4" />
                Add to my calendar
              </button>
            ) : (
              <ButtonLink href={company.phoneHref} variant="dark">
                Call {company.phone} now
              </ButtonLink>
            )}
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy-100 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-sm transition hover:-translate-y-0.5 hover:border-rescue-500 hover:text-rescue-600"
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setData(initialData);
              }}
              type="button"
            >
              Start another request
            </button>
          </div>
        </motion.div>

        <aside className="rounded-[2.5rem] bg-navy-950 p-6 text-white shadow-premium sm:p-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">What happens next</p>
          <ol className="mt-6 grid gap-5">
            {nextStepsTimeline(mold).map((item, index) => (
              <li className="flex gap-4" key={item.title}>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-black ${index === 0 ? "bg-rescue-500" : "bg-white/10"}`}>
                  {index + 1}
                </span>
                <div>
                  <p className="font-black">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink className="mt-6 w-full" href="/track" variant="secondary">
            Track request {reference}
          </ButtonLink>
          <p className="mt-6 rounded-2xl bg-white/8 p-4 text-xs leading-5 text-white/55">
            Demo booking: nothing was sent or saved. In the live version this request goes to the office, your calendar
            and text reminders.
          </p>
        </aside>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
      <aside className="glass-card rounded-[2.5rem] p-6 lg:sticky lg:top-28">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">Book an Inspection</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-950">About 60 seconds, start to finish</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Pick a service, tell us what you&apos;re seeing, add your insurance and photos, and choose a time. Emergencies
          skip the line.
        </p>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-navy-100">
          <div className="h-full rounded-full bg-rescue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1">
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
            {step === 2 ? <AssessmentStep data={data} mold={mold} update={update} /> : null}
            {step === 3 ? <PropertyStep data={data} update={update} /> : null}
            {step === 4 ? <InsuranceStep data={data} update={update} /> : null}
            {step === 5 ? <CustomerStep data={data} update={update} /> : null}
            {step === 6 ? <ScheduleStep data={data} emergency={emergency} update={update} /> : null}
            {step === 7 ? <PhotoStep data={data} update={update} /> : null}
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
            {step === steps.length - 1 ? "Book My Inspection" : "Continue"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceStep({ data, update }: { data: BookingData; update: Update }) {
  return (
    <StepShell eyebrow="Service Selection" title="What do you need help with?">
      <div className="grid gap-3 sm:grid-cols-2">
        {bookingServices.map((service) => (
          <Choice active={data.service === service} key={service} label={service} onClick={() => update("service", service)} />
        ))}
      </div>
    </StepShell>
  );
}

function UrgencyStep({ data, update }: { data: BookingData; update: Update }) {
  return (
    <StepShell eyebrow="Urgency" title="How quickly do you need help?">
      <div className="grid gap-3 sm:grid-cols-2">
        {bookingUrgencies.map((urgency) => (
          <Choice active={data.urgency === urgency} key={urgency} label={urgency} onClick={() => update("urgency", urgency)} />
        ))}
      </div>
    </StepShell>
  );
}

function AssessmentStep({ data, mold, update }: { data: BookingData; mold: boolean; update: Update }) {
  const toggleSign = (sign: string) =>
    update("signs", data.signs.includes(sign) ? data.signs.filter((item) => item !== sign) : [...data.signs, sign]);

  return (
    <StepShell eyebrow={mold ? "Mold Assessment" : "Damage Assessment"} title={mold ? "Tell us what you're seeing" : "What are you noticing?"}>
      {mold ? (
        <>
          <p className="mb-3 text-sm font-black text-navy-950">How big is the visible area?</p>
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {moldAreaSizes.map((size) => (
              <Choice active={data.moldArea === size} key={size} label={size} onClick={() => update("moldArea", size)} />
            ))}
          </div>
        </>
      ) : null}
      <p className="mb-3 text-sm font-black text-navy-950">Check everything that applies</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {moldSigns.map((sign) => (
          <Choice active={data.signs.includes(sign)} key={sign} label={sign} onClick={() => toggleSign(sign)} />
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        <Toggle
          checked={data.sensitiveOccupants}
          label="Someone in the home has asthma, allergies, is pregnant, elderly or an infant"
          onChange={(value) => update("sensitiveOccupants", value)}
        />
        {mold ? (
          <Toggle
            checked={data.wantsTesting}
            label="I'd like air-quality / mold testing with lab results"
            onChange={(value) => update("wantsTesting", value)}
          />
        ) : null}
      </div>
    </StepShell>
  );
}

function PropertyStep({ data, update }: { data: BookingData; update: Update }) {
  return (
    <StepShell eyebrow="Property Details" title="Where is the damage located?">
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        {(["Residential", "Commercial"] as const).map((type) => (
          <Choice active={data.propertyType === type} key={type} label={type} onClick={() => update("propertyType", type)} />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Property address" value={data.address} onChange={(value) => update("address", value)} />
        <Field label="City" value={data.city} onChange={(value) => update("city", value)} />
        <Field label="ZIP code" value={data.zip} onChange={(value) => update("zip", value)} />
        <Field label="Room / area" value={data.damageLocation} placeholder="Bathroom, attic, AC closet..." onChange={(value) => update("damageLocation", value)} />
        <label className="grid gap-2 text-sm font-black text-navy-950 sm:col-span-2">
          Short description
          <textarea
            className="min-h-32 rounded-2xl border border-navy-100 px-4 py-3 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
            onChange={(event) => update("description", event.target.value)}
            placeholder="What happened, when you noticed it, and what areas are affected."
            value={data.description}
          />
        </label>
      </div>
    </StepShell>
  );
}

function InsuranceStep({ data, update }: { data: BookingData; update: Update }) {
  return (
    <StepShell eyebrow="Insurance" title="Is this going through insurance?">
      <div className="grid gap-3 sm:grid-cols-3">
        {(["Yes", "No", "Not sure"] as const).map((option) => (
          <Choice active={data.insured === option} key={option} label={option} onClick={() => update("insured", option)} />
        ))}
      </div>
      {data.insured === "Yes" ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-black text-navy-950">
            Insurance company
            <select
              className="min-h-12 rounded-2xl border border-navy-100 bg-white px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              onChange={(event) => update("carrier", event.target.value)}
              value={data.carrier}
            >
              {insuranceCarriers.map((carrier) => (
                <option key={carrier}>{carrier}</option>
              ))}
            </select>
          </label>
          <Field label="Claim number (if you have one)" value={data.claimNumber} onChange={(value) => update("claimNumber", value)} />
          <div className="sm:col-span-2">
            <Toggle checked={data.adjusterHelp} label="Please talk to my adjuster and send the photo report for me" onChange={(value) => update("adjusterHelp", value)} />
          </div>
        </div>
      ) : (
        <p className="mt-6 rounded-3xl bg-navy-50 p-5 leading-7 text-slate-600">
          Not sure if you&apos;re covered? We document everything with photos and moisture readings, so you have what
          your insurer asks for. See the{" "}
          <Link className="font-black text-rescue-600 underline" href="/insurance-claims">
            insurance claim guide
          </Link>
          .
        </p>
      )}
    </StepShell>
  );
}

function CustomerStep({ data, update }: { data: BookingData; update: Update }) {
  return (
    <StepShell eyebrow="Your Information" title="How should we reach you?">
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

function ScheduleStep({ data, emergency, update }: { data: BookingData; emergency: boolean; update: Update }) {
  const [days] = useState(upcomingDays);
  const dayIndex = days.findIndex((day) => day.iso === data.requestedDate);

  return (
    <StepShell eyebrow="Pick a Time" title={emergency ? "Emergency: we'll call you first" : "Choose your inspection window"}>
      {emergency ? (
        <div className="mb-5 rounded-3xl border border-rescue-500/30 bg-rescue-500/10 p-5 text-navy-950">
          <p className="font-black">Emergency requests skip the calendar.</p>
          <p className="mt-2 leading-7 text-slate-600">
            A technician calls you back right away, 24/7. You can still pick a backup window below.
          </p>
        </div>
      ) : null}
      <p className="mb-3 text-sm font-black text-navy-950">Day</p>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {days.map((day) => (
          <button
            className={`min-w-[4.75rem] shrink-0 rounded-2xl px-3 py-3 text-center transition ${
              data.requestedDate === day.iso ? "bg-navy-950 text-white ring-2 ring-rescue-500" : "bg-white text-navy-950 ring-1 ring-navy-100 hover:ring-rescue-500"
            }`}
            key={day.iso}
            onClick={() => update("requestedDate", day.iso)}
            type="button"
          >
            <span className="block text-xs font-bold uppercase opacity-70">{day.weekday}</span>
            <span className="block font-black">{day.label}</span>
          </button>
        ))}
      </div>
      <p className="mb-3 mt-5 text-sm font-black text-navy-950">Time</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {appointmentSlots.map((slot, slotIndex) => {
          const booked = dayIndex >= 0 && isBooked(dayIndex, slotIndex);
          return (
            <button
              className={`min-h-14 rounded-2xl px-4 py-3 text-sm font-black transition ${
                booked
                  ? "cursor-not-allowed bg-navy-50 text-slate-400 line-through"
                  : data.requestedTime === slot
                    ? "bg-navy-950 text-white shadow-premium ring-2 ring-rescue-500"
                    : "bg-white text-navy-950 ring-1 ring-navy-100 hover:ring-rescue-500"
              }`}
              disabled={booked || dayIndex < 0}
              key={slot}
              onClick={() => update("requestedTime", slot)}
              type="button"
            >
              {slot}
              {booked ? <span className="block text-xs font-bold">Booked</span> : null}
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        <Toggle checked={data.textReminders} label="Text me a reminder the day before and when the tech is on the way" onChange={(value) => update("textReminders", value)} />
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
        <BellRing className="h-4 w-4 text-rescue-500" /> Inspections are free. Windows are confirmed by the office.
      </p>
    </StepShell>
  );
}

function PhotoStep({ data, update }: { data: BookingData; update: Update }) {
  return (
    <StepShell eyebrow="Damage Photos" title="Add photos of the affected area">
      <label className="block cursor-pointer rounded-[2rem] border border-dashed border-navy-200 bg-navy-50 p-8 text-center transition hover:border-rescue-500 hover:bg-rescue-500/5">
        <Camera className="mx-auto h-10 w-10 text-rescue-500" />
        <span className="mt-4 block text-lg font-black text-navy-950">Take or choose photos</span>
        <span className="mt-2 block text-sm leading-6 text-slate-600">
          Wide shots of the room plus close-ups of stains, growth or standing water help us bring the right equipment.
        </span>
        <input
          accept="image/*,video/*"
          className="sr-only"
          multiple
          onChange={(event) => update("photoCount", event.target.files?.length ?? 0)}
          type="file"
        />
      </label>
      <div className="mt-5 rounded-3xl bg-navy-950 p-5 text-white">
        <p className="font-black">{data.photoCount} photo(s) attached</p>
        <p className="mt-2 text-sm leading-6 text-white/65">Photos go with your request and into the report for your insurer.</p>
      </div>
    </StepShell>
  );
}

function StepShell({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">{eyebrow}</p>
      <h3 className="mt-3 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">{title}</h3>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function Choice({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      aria-pressed={active}
      className={`min-h-14 rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
        active ? "bg-navy-950 text-white shadow-premium ring-2 ring-rescue-500" : "bg-white text-navy-950 ring-1 ring-navy-100 hover:ring-rescue-500"
      }`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

function Toggle({ checked, label, onChange }: { checked: boolean; label: string; onChange: (value: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-navy-50 p-4 text-sm font-bold text-navy-950">
      <input checked={checked} className="mt-0.5 h-5 w-5 accent-rescue-500" onChange={(event) => onChange(event.target.checked)} type="checkbox" />
      {label}
    </label>
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
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-1 font-black text-navy-950">{value}</p>
    </div>
  );
}

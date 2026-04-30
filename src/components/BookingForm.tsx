"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/utils";

const urgencies = ["Emergency", "Today", "This week", "Planning ahead"];
const propertyTypes = ["Home", "Business", "Hotel", "Rental / Managed Property"];

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    service: services[0].title,
    urgency: urgencies[0],
    property: propertyTypes[0],
    address: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  });

  const progress = useMemo(() => ((step + 1) / 6) * 100, [step]);

  function update(field: keyof typeof data, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  if (submitted) {
    return (
      <div className="glass-card mx-auto max-w-2xl rounded-[2rem] p-8 text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
          Request Received
        </p>
        <h2 className="mt-4 text-3xl font-black text-navy">You are booked.</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Demo confirmation for {data.service}. A live version would send this
          to CRM, dispatch, email, SMS, and payment tools.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card mx-auto max-w-3xl rounded-[2rem] p-5 sm:p-8">
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full bg-orange transition-all" style={{ width: `${progress}%` }} />
      </div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="mt-8"
        initial={{ opacity: 0, x: 20 }}
        key={step}
      >
        {step === 0 ? (
          <ChoiceStep
            label="Select Service"
            options={services.map((service) => service.title)}
            value={data.service}
            onSelect={(value) => update("service", value)}
          />
        ) : null}
        {step === 1 ? (
          <ChoiceStep
            label="Urgency Level"
            options={urgencies}
            value={data.urgency}
            onSelect={(value) => update("urgency", value)}
          />
        ) : null}
        {step === 2 ? (
          <div>
            <StepTitle title="Property Details" />
            <ChoiceStep
              label="Property Type"
              options={propertyTypes}
              value={data.property}
              onSelect={(value) => update("property", value)}
            />
            <Input
              label="Property Address"
              onChange={(value) => update("address", value)}
              value={data.address}
            />
          </div>
        ) : null}
        {step === 3 ? (
          <div>
            <StepTitle title="Contact Info" />
            <Input label="Name" onChange={(value) => update("name", value)} value={data.name} />
            <Input label="Phone" onChange={(value) => update("phone", value)} value={data.phone} />
            <Input label="Email" onChange={(value) => update("email", value)} value={data.email} />
          </div>
        ) : null}
        {step === 4 ? (
          <div>
            <StepTitle title="Choose Date and Time" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Preferred Date" onChange={(value) => update("date", value)} type="date" value={data.date} />
              <Input label="Preferred Time" onChange={(value) => update("time", value)} type="time" value={data.time} />
            </div>
          </div>
        ) : null}
        {step === 5 ? (
          <div>
            <StepTitle title="Confirm Request" />
            <div className="grid gap-3 rounded-3xl bg-white p-5 text-sm text-slate-700">
              {Object.entries(data).map(([key, value]) => (
                <p className="flex justify-between gap-4" key={key}>
                  <span className="font-black capitalize text-navy">{key}</span>
                  <span>{value || "Not provided"}</span>
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </motion.div>
      <div className="mt-8 flex justify-between gap-3">
        <button
          className="rounded-full border border-slate-200 bg-white px-6 py-3 font-black text-navy disabled:opacity-40"
          disabled={step === 0}
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          type="button"
        >
          Back
        </button>
        <button
          className="rounded-full bg-orange px-6 py-3 font-black text-white"
          onClick={() => (step === 5 ? setSubmitted(true) : setStep((current) => current + 1))}
          type="button"
        >
          {step === 5 ? "Submit Request" : "Next"}
        </button>
      </div>
    </div>
  );
}

function StepTitle({ title }: { title: string }) {
  return <h2 className="mb-5 text-2xl font-black text-navy">{title}</h2>;
}

function ChoiceStep({
  label,
  options,
  value,
  onSelect
}: {
  label: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <StepTitle title={label} />
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            className={`rounded-2xl border p-4 text-left font-black transition hover:border-orange hover:bg-orange hover:text-white ${
              option === value ? "border-orange bg-orange text-white" : "border-slate-200 bg-white text-navy"
            }`}
            key={option}
            onClick={() => onSelect(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text"
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="mt-4 block">
      <span className="text-sm font-black text-navy">{label}</span>
      <input
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-navy outline-none focus:border-orange"
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
    </label>
  );
}

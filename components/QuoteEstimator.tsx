"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { services } from "@/lib/site";

const severities = ["Minor", "Moderate", "Severe", "Unsure"];
const timelines = ["Emergency", "This Week", "Planning Ahead"];
const preferences = ["Call", "Text", "Email"];

export function QuoteEstimator() {
  const [propertyType, setPropertyType] = useState("Residential");
  const [service, setService] = useState(services[0].title);
  const [severity, setSeverity] = useState("Moderate");
  const [timeline, setTimeline] = useState("Emergency");
  const [preference, setPreference] = useState("Call");

  const message = useMemo(() => {
    const urgent = timeline === "Emergency" || severity === "Severe";
    return urgent
      ? "Based on your answers, we recommend scheduling a free inspection as soon as possible."
      : "Based on your answers, a free inspection can confirm scope, timeline, and recommended next steps.";
  }, [severity, timeline]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div className="grid gap-5">
        <Select label="Property type" value={propertyType} onChange={setPropertyType} options={["Residential", "Commercial"]} />
        <Select label="Service needed" value={service} onChange={setService} options={services.map((item) => item.title)} />
        <Select label="Damage severity" value={severity} onChange={setSeverity} options={severities} />
        <Select label="Timeline" value={timeline} onChange={setTimeline} options={timelines} />
        <Select label="Contact preference" value={preference} onChange={setPreference} options={preferences} />
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] bg-navy-950 p-7 text-white shadow-premium"
        initial={{ opacity: 0, y: 16 }}
        key={`${propertyType}-${service}-${severity}-${timeline}-${preference}`}
      >
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">
          Smart Recommendation
        </p>
        <h3 className="mt-4 text-3xl font-black">Free inspection recommended</h3>
        <p className="mt-4 leading-8 text-white/72">{message}</p>
        <div className="mt-6 grid gap-3 rounded-3xl bg-white/8 p-4 text-sm text-white/76">
          <p><strong className="text-white">Property:</strong> {propertyType}</p>
          <p><strong className="text-white">Service:</strong> {service}</p>
          <p><strong className="text-white">Urgency:</strong> {timeline}</p>
          <p><strong className="text-white">Preferred contact:</strong> {preference}</p>
        </div>
        <div className="mt-6">
          <ButtonLink href="/book-service">Schedule Free Inspection</ButtonLink>
        </div>
        <p className="mt-4 text-xs leading-5 text-white/50">
          This front-end estimator does not promise exact pricing.
        </p>
      </motion.div>
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-navy-950">
      {label}
      <select
        className="min-h-12 rounded-2xl border border-navy-100 bg-white px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

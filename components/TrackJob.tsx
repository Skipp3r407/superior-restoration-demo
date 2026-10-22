"use client";

import { CheckCircle2, Clock, FileText, Search } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { company, remediationStages, sampleJob } from "@/lib/site";

/** Customer job lookup by request number. Demo data only; the live version reads the job from the office system. */
export function TrackJob() {
  const [reference, setReference] = useState("");
  const [shown, setShown] = useState("");

  return (
    <div className="grid gap-8">
      <form
        className="flex flex-col gap-3 rounded-[2.5rem] bg-white p-5 shadow-premium ring-1 ring-navy-100 sm:flex-row sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          setShown(reference.trim().toUpperCase() || "SR-104582");
        }}
      >
        <label className="sr-only" htmlFor="job-reference">
          Request number
        </label>
        <input
          className="min-h-14 flex-1 rounded-2xl border border-navy-100 px-5 text-lg font-bold outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
          id="job-reference"
          onChange={(event) => setReference(event.target.value)}
          placeholder="Request number, e.g. SR-104582"
          value={reference}
        />
        <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-rescue-500 px-8 font-black text-white shadow-glow transition hover:bg-rescue-600" type="submit">
          <Search className="h-5 w-5" /> Track my job
        </button>
      </form>

      {shown ? (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2.5rem] bg-navy-950 p-6 text-white shadow-premium sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">Job {shown}</p>
            <h2 className="mt-3 text-3xl font-black">{sampleJob.service}</h2>
            <p className="mt-2 text-white/65">
              {sampleJob.address} · {sampleJob.technician}
            </p>
            <ol className="mt-8 grid gap-3">
              {remediationStages.map((stage, index) => (
                <li
                  className={`flex items-start gap-4 rounded-2xl p-4 ${
                    index < sampleJob.stage ? "bg-emerald-500/12" : index === sampleJob.stage ? "bg-rescue-500" : "bg-white/6"
                  }`}
                  key={stage.title}
                >
                  {index < sampleJob.stage ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  ) : (
                    <Clock className={`mt-0.5 h-5 w-5 shrink-0 ${index === sampleJob.stage ? "text-white" : "text-white/40"}`} />
                  )}
                  <div>
                    <p className="font-black">
                      {stage.title}
                      {index === sampleJob.stage ? " · in progress" : ""}
                    </p>
                    <p className="text-sm text-white/65">{stage.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <aside className="grid h-fit gap-6">
            <div className="rounded-[2.5rem] bg-white p-6 shadow-premium ring-1 ring-navy-100">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">Next visit</p>
              <p className="mt-2 text-xl font-black text-navy-950">{sampleJob.nextVisit}</p>
            </div>
            <div className="rounded-[2.5rem] bg-white p-6 shadow-premium ring-1 ring-navy-100">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">Your documents</p>
              <ul className="mt-4 grid gap-3">
                {sampleJob.documents.map((doc) => (
                  <li className="flex items-center justify-between gap-3 rounded-2xl bg-navy-50 p-3" key={doc.name}>
                    <span className="flex items-center gap-2 text-sm font-black text-navy-950">
                      <FileText className="h-4 w-4 text-rescue-500" /> {doc.name}
                    </span>
                    <span className="shrink-0 text-xs font-bold text-slate-500">{doc.status}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink href={company.phoneHref} variant="dark">
              Questions? Call {company.phone}
            </ButtonLink>
            <p className="text-xs leading-5 text-slate-500">Demo: any request number shows this sample job.</p>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

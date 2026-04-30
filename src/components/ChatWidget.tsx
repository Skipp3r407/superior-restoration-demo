"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [lead, setLead] = useState({ name: "", phone: "", service: "" });

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-6">
      {open ? (
        <div className="mb-4 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-[2rem] bg-white shadow-premium ring-1 ring-slate-100">
          <div className="flex items-center justify-between bg-navy p-4 text-white">
            <div>
              <p className="font-black">Restoration Assistant</p>
              <p className="text-sm text-white/60">Ask about service, timing, or booking.</p>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} type="button">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3 p-4">
            <p className="rounded-2xl bg-slate-100 p-3 text-sm leading-6 text-slate-700">
              Hi. I can help you request water, fire, mold, storm, or commercial
              restoration service.
            </p>
            <p className="rounded-2xl bg-orange p-3 text-sm leading-6 text-white">
              Sample Q&A: “How fast can you respond?” Emergency requests are
              prioritized and can be submitted through booking.
            </p>
            <input
              className="min-h-11 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-orange"
              onChange={(event) => setLead((current) => ({ ...current, name: event.target.value }))}
              placeholder="Your name"
              value={lead.name}
            />
            <input
              className="min-h-11 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-orange"
              onChange={(event) => setLead((current) => ({ ...current, phone: event.target.value }))}
              placeholder="Phone number"
              value={lead.phone}
            />
            <input
              className="min-h-11 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-orange"
              onChange={(event) => setLead((current) => ({ ...current, service: event.target.value }))}
              placeholder="Service needed"
              value={lead.service}
            />
            <button
              className="min-h-11 w-full rounded-full bg-orange font-black text-white"
              type="button"
            >
              Save Lead
            </button>
          </div>
        </div>
      ) : null}
      <button
        aria-label="Open chat"
        className="grid h-16 w-16 place-items-center rounded-full bg-orange text-white shadow-premium transition hover:-translate-y-1"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <MessageCircle />
      </button>
    </div>
  );
}

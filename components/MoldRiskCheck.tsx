"use client";

import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { company, moldRiskQuestions } from "@/lib/site";

const maxScore = moldRiskQuestions.reduce((sum, item) => sum + item.weight, 0);

function riskLevel(score: number) {
  if (score >= maxScore * 0.45) {
    return {
      label: "High risk",
      icon: ShieldAlert,
      tone: "bg-rescue-500 text-white",
      text: "Several strong signs of moisture and mold. Book an inspection soon, keep the area closed off, and don't disturb visible growth."
    };
  }
  if (score >= maxScore * 0.2) {
    return {
      label: "Moderate risk",
      icon: AlertTriangle,
      tone: "bg-amber-400 text-navy-950",
      text: "Some warning signs. A free inspection with moisture readings will show whether there is hidden growth."
    };
  }
  return {
    label: "Low risk",
    icon: CheckCircle2,
    tone: "bg-emerald-500 text-white",
    text: "No strong signs right now. Keep humidity under 50% and check again after storms or leaks."
  };
}

/** Eight yes/no questions homeowners can answer in under a minute, scored into a risk level with a next step. */
export function MoldRiskCheck() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => moldRiskQuestions.map(() => null));
  const answered = answers.filter((answer) => answer !== null).length;
  const score = moldRiskQuestions.reduce((sum, item, index) => sum + (answers[index] ? item.weight : 0), 0);
  const done = answered === moldRiskQuestions.length;
  const result = riskLevel(score);
  const ResultIcon = result.icon;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <section className="rounded-[2.5rem] bg-white p-5 shadow-premium ring-1 ring-navy-100 sm:p-8">
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-navy-100">
          <div className="h-full rounded-full bg-rescue-500 transition-all" style={{ width: `${(answered / moldRiskQuestions.length) * 100}%` }} />
        </div>
        <ol className="grid gap-4">
          {moldRiskQuestions.map((item, index) => (
            <li className="rounded-3xl border border-navy-100 p-4 sm:flex sm:items-center sm:justify-between sm:gap-4" key={item.question}>
              <p className="font-black text-navy-950">
                {index + 1}. {item.question}
              </p>
              <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
                {[true, false].map((value) => (
                  <button
                    aria-pressed={answers[index] === value}
                    className={`min-h-11 min-w-16 rounded-full px-4 text-sm font-black transition ${
                      answers[index] === value ? "bg-navy-950 text-white ring-2 ring-rescue-500" : "bg-navy-50 text-navy-950 hover:ring-2 hover:ring-rescue-500"
                    }`}
                    key={String(value)}
                    onClick={() => setAnswers((current) => current.map((answer, i) => (i === index ? value : answer)))}
                    type="button"
                  >
                    {value ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className="rounded-[2.5rem] bg-navy-950 p-6 text-white shadow-premium sm:p-8 lg:sticky lg:top-28">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">Your result</p>
        {done ? (
          <>
            <span className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-black ${result.tone}`}>
              <ResultIcon className="h-5 w-5" /> {result.label}
            </span>
            <p className="mt-5 text-lg leading-8 text-white/85">{result.text}</p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/book-service">Book a Free Mold Inspection</ButtonLink>
              <ButtonLink href={company.phoneHref} variant="secondary">
                Call {company.phone}
              </ButtonLink>
            </div>
          </>
        ) : (
          <p className="mt-5 text-lg leading-8 text-white/70">
            Answer all {moldRiskQuestions.length} questions to see your risk level. {answered} of {moldRiskQuestions.length} done.
          </p>
        )}
        <p className="mt-6 text-xs leading-5 text-white/45">
          A quick guide, not a diagnosis. Only an inspection with moisture readings or lab testing confirms mold.
        </p>
      </aside>
    </div>
  );
}

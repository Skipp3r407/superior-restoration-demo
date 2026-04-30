"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  Menu,
  Paperclip,
  Send,
  ThumbsUp
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { chatbotKnowledge, company, services } from "@/lib/site";

type Message = {
  role: "assistant" | "user";
  text: string;
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I can help with restoration questions and start an emergency intake. What service do you need?"
    }
  ]);

  const topics = useMemo(() => services.map((service) => service.shortTitle), []);

  function respond(value: string) {
    const question = value.trim();
    if (!question) return;

    const lower = question.toLowerCase();
    const matched = chatbotKnowledge.find((item) =>
      lower.split(" ").some((word) => item.question.toLowerCase().includes(word))
    );
    const onTopic = [
      "water",
      "fire",
      "mold",
      "storm",
      "cleanup",
      "commercial",
      "estimate",
      "inspection",
      "insurance",
      "emergency",
      "name",
      "phone"
    ].some((word) => lower.includes(word));

    const answer = onTopic
      ? `${matched?.answer ?? "For restoration concerns, we recommend a free inspection so a technician can confirm scope and urgency."} To start intake, please share your name, phone, service needed, urgency, and property type.`
      : "I can help with restoration topics like water, fire, mold, storm damage, emergency cleanup, estimates, and inspection intake. For emergencies, call directly.";

    setMessages((current) => [
      ...current,
      { role: "user", text: question },
      { role: "assistant", text: answer }
    ]);
    setInput("");
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mb-4 flex h-[min(42rem,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_90px_rgba(3,26,54,0.28)] ring-1 ring-navy-100"
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
          >
            <div className="flex min-h-16 items-center justify-between bg-rescue-500 px-5 text-white">
              <div className="flex items-center gap-3">
                <button
                  aria-label="Minimize chat"
                  className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/14"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div>
                  <p className="text-xl font-black leading-tight">SuperBot</p>
                  <p className="text-xs font-bold text-white/75">
                    Superior Restoration assistant
                  </p>
                </div>
              </div>
              <button
                aria-label="Open chat menu"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/14"
                type="button"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto bg-white px-5 py-8">
              {messages.map((message, index) => (
                <div
                  className={`flex items-end gap-3 ${
                    message.role === "assistant"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                  key={`${message.role}-${index}`}
                >
                  {message.role === "assistant" ? (
                    <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-navy-100">
                      <Image
                        alt={`${company.name} logo`}
                        className="object-contain p-1.5"
                        fill
                        sizes="44px"
                        src={company.logo}
                      />
                    </span>
                  ) : null}
                  <div>
                    {message.role === "assistant" && index === 0 ? (
                      <p className="mb-2 text-xs font-bold text-slate-600">
                        SuperBot
                      </p>
                    ) : null}
                    <div
                      className={`max-w-[min(17rem,calc(100vw-7rem))] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                        message.role === "assistant"
                          ? "rounded-bl-md bg-rescue-500 text-white"
                          : "rounded-br-md bg-navy-50 text-navy-950"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}

              <div className="ml-14 grid gap-3">
                <button
                  className="min-h-11 rounded-xl border border-rescue-500 px-4 text-sm font-bold text-rescue-600 transition hover:bg-rescue-500 hover:text-white"
                  onClick={() => respond("Tell me about your services")}
                  type="button"
                >
                  Tell me about your services
                </button>
                <button
                  className="min-h-11 rounded-xl border border-rescue-500 px-4 text-sm font-bold text-rescue-600 transition hover:bg-rescue-500 hover:text-white"
                  onClick={() => respond("How can I contact you?")}
                  type="button"
                >
                  How can I contact you?
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {topics.slice(0, 4).map((topic) => (
                  <button
                    className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-950 transition hover:bg-rescue-500 hover:text-white"
                    key={topic}
                    onClick={() => respond(topic)}
                    type="button"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-navy-100 bg-white p-4 shadow-[0_-12px_30px_rgba(3,26,54,0.06)]">
              <div className="flex items-center gap-2">
                <input
                  className="min-h-12 flex-1 rounded-full border border-transparent bg-white px-1 text-sm outline-none placeholder:text-slate-500 focus:border-transparent"
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") respond(input);
                  }}
                  placeholder="Ask a restoration question"
                  value={input}
                />
                <button
                  aria-label="Like assistant"
                  className="grid h-10 w-10 place-items-center rounded-full text-navy-950 transition hover:bg-rescue-500 hover:text-white"
                  type="button"
                >
                  <ThumbsUp className="h-5 w-5" />
                </button>
                <button
                  aria-label="Attach file"
                  className="grid h-10 w-10 place-items-center rounded-full text-navy-950 transition hover:bg-rescue-500 hover:text-white"
                  type="button"
                >
                  <Paperclip className="h-5 w-5" />
                </button>
                <button
                  aria-label="Send chat message"
                  className="grid h-10 w-10 place-items-center rounded-full bg-rescue-500 text-white transition hover:bg-rescue-600"
                  onClick={() => respond(input)}
                  type="button"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                This assistant provides general guidance. For emergencies, call
                directly at {company.phone}.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="flex flex-col items-end gap-2">
        <button
          aria-label="Open restoration assistant"
          className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-rescue-500 text-white shadow-glow transition hover:scale-105"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? (
            <ChevronDown className="h-8 w-8" />
          ) : (
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
              <Image
                alt={`${company.name} chat`}
                className="object-contain p-1"
                fill
                sizes="40px"
                src={company.logo}
              />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

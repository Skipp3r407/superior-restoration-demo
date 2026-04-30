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
    <div className="fixed bottom-36 right-3 z-50 md:bottom-6 md:right-4">
      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mb-3 flex h-[min(31rem,calc(100dvh-13rem))] w-[calc(100vw-1.5rem)] max-w-sm flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_90px_rgba(3,26,54,0.28)] ring-1 ring-navy-100 md:mb-4 md:h-[min(42rem,calc(100vh-7rem))] md:max-w-md md:rounded-[1.75rem]"
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
          >
            <div className="flex min-h-14 items-center justify-between bg-rescue-500 px-4 text-white md:min-h-16 md:px-5">
              <div className="flex items-center gap-3">
                <button
                  aria-label="Minimize chat"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition hover:bg-white/14"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div>
                  <p className="text-base font-black leading-tight md:text-xl">SuperBot</p>
                  <p className="text-[0.68rem] font-bold text-white/75 md:text-xs">
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

            <div className="flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4 md:space-y-5 md:px-5 md:py-8">
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
                    <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-navy-100 md:h-11 md:w-11">
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
                      <p className="mb-1 text-xs font-bold text-slate-600 md:mb-2">
                        SuperBot
                      </p>
                    ) : null}
                    <div
                      className={`max-w-[min(15rem,calc(100vw-6rem))] rounded-2xl px-3 py-2.5 text-sm leading-6 shadow-sm md:max-w-[min(17rem,calc(100vw-7rem))] md:px-4 md:py-3 ${
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

              <div className="ml-11 grid gap-2 md:ml-14 md:gap-3">
                <button
                  className="min-h-10 rounded-xl border border-rescue-500 px-3 text-sm font-bold text-rescue-600 transition hover:bg-rescue-500 hover:text-white md:min-h-11 md:px-4"
                  onClick={() => respond("Tell me about your services")}
                  type="button"
                >
                  Tell me about your services
                </button>
                <button
                  className="min-h-10 rounded-xl border border-rescue-500 px-3 text-sm font-bold text-rescue-600 transition hover:bg-rescue-500 hover:text-white md:min-h-11 md:px-4"
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

            <div className="border-t border-navy-100 bg-white p-3 shadow-[0_-12px_30px_rgba(3,26,54,0.06)] md:p-4">
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
              <p className="mt-2 text-[0.68rem] leading-4 text-slate-500 md:mt-3 md:text-xs md:leading-5">
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
          className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-rescue-500 text-white shadow-glow transition hover:scale-105 md:h-16 md:w-16"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? (
            <ChevronDown className="h-7 w-7 md:h-8 md:w-8" />
          ) : (
            <span className="relative h-9 w-9 overflow-hidden rounded-full bg-white md:h-10 md:w-10">
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

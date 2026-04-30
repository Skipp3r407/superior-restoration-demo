"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { useState } from "react";

const damagedInteriorImage =
  "https://images.unsplash.com/photo-1768321901750-f7b96d774456?auto=format&fit=crop&w=1400&q=85";
const restoredInteriorImage =
  "https://images.unsplash.com/photo-1774199496664-a9690967be5a?auto=format&fit=crop&w=1400&q=85";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);

  function updatePosition(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(85, Math.max(15, nextPosition)));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
          Interactive Showcase
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
          Drag to compare a restoration-style transformation
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          This slider uses royalty-free interior visuals to show the kind of
          damaged-room-to-restored-room transformation a restoration company
          would help coordinate after cleanup, drying, and repairs.
        </p>
        <div className="mt-6 rounded-3xl bg-navy-50 p-5">
          <p className="font-black text-navy-950">Try it:</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Drag the red handle or use the range control to reveal more of each
            side.
          </p>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] p-4">
        <div
          className="relative h-[20rem] cursor-ew-resize touch-none overflow-hidden rounded-[1.5rem] bg-navy-950 sm:h-[28rem] sm:rounded-[2rem]"
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            updatePosition(event);
          }}
          onPointerMove={(event) => {
            if (event.buttons === 1) {
              updatePosition(event);
            }
          }}
        >
          <Image
            alt="Damaged interior restoration example"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={damagedInteriorImage}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              alt="Restored interior after restoration example"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={restoredInteriorImage}
            />
          </div>
          <div
            className="absolute inset-y-0 w-1 -translate-x-1/2 bg-rescue-500 shadow-glow"
            style={{ left: `${position}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-rescue-500 text-sm font-black text-white shadow-glow">
              ↔
            </span>
          </div>
          <div className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-2 text-xs font-black text-white backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-sm">
            Restored Example
          </div>
          <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-2 text-xs font-black text-navy-950 backdrop-blur sm:bottom-5 sm:right-5 sm:px-4 sm:text-sm">
            Damaged Interior
          </div>
        </div>
      </div>
    </div>
  );
}

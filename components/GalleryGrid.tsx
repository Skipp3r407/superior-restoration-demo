"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryCategories, galleryImages } from "@/lib/site";

export function GalleryGrid({ limit, filterable = false }: { limit?: number; filterable?: boolean }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    const items = active === "All" ? galleryImages : galleryImages.filter((item) => item.category === active);
    return typeof limit === "number" ? items.slice(0, limit) : items;
  }, [active, limit]);

  return (
    <div>
      {filterable ? (
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {galleryCategories.map((category) => (
            <button
              className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                active === category
                  ? "bg-navy-950 text-white shadow-premium"
                  : "bg-white text-navy-950 ring-1 ring-navy-100 hover:ring-rescue-500"
              }`}
              key={category}
              onClick={() => setActive(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.article
              layout
              animate={{ opacity: 1, scale: 1 }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-navy-100 transition duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:ring-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.25)]"
              exit={{ opacity: 0, scale: 0.96 }}
              initial={{ opacity: 0, scale: 0.96 }}
              key={item.src}
            >
              <div className="relative h-60 overflow-hidden sm:h-72">
                <Image
                  alt={item.title}
                  className="object-cover transition duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={item.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/82 via-navy-950/15 to-transparent transition group-hover:from-rescue-600/92 group-hover:via-rescue-500/42" />
                <div className="absolute inset-x-5 bottom-5 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-rescue-400">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-white/75 transition-all duration-300 group-hover:max-h-20">
                    Restoration Service Examples only. Royalty-free visuals, not claimed client projects.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

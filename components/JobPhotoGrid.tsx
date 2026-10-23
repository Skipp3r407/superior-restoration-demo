import Image from "next/image";
import { jobPhotos } from "@/lib/site";

/** Masonry grid of Superior Restoration's real job photos (tall photos keep their portrait shape). */
export function JobPhotoGrid() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {jobPhotos.map((item) => (
        <article
          className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[2rem] bg-navy-950 shadow-sm ring-1 ring-navy-100 transition duration-300 hover:-translate-y-2 hover:ring-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.25)]"
          key={item.src}
        >
          <div className={`relative overflow-hidden ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
            <Image
              alt={item.title}
              className="object-cover transition duration-700 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={item.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-rescue-400">{item.category}</p>
              <h3 className="mt-1.5 text-xl font-black text-white">{item.title}</h3>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

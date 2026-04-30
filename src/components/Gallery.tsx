import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1581579185169-243c50b2573e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1561439740-e8863909de77?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1724230442705-646dc7c86943?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1695605347102-2cc806d3cabf?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1000&q=85"
];

export function Gallery() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
            Project Gallery
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-5xl">
            Visual proof for restoration confidence
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div
              className="relative h-72 overflow-hidden rounded-[2rem] shadow-premium"
              key={`${src}-${index}`}
            >
              <Image
                alt={`Restoration gallery image ${index + 1}`}
                className="object-cover transition duration-700 hover:scale-105"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

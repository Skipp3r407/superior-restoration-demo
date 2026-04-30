import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { StaggerItem } from "@/components/Motion";
import type { Service } from "@/lib/site";

export function ServiceCard({
  service,
  href = `/services/${service.slug}`
}: {
  service: Service;
  href?: string;
}) {
  return (
    <StaggerItem className="group h-full">
      <article className="glass-card flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-rescue-500/50 hover:shadow-[0_30px_90px_rgba(232,31,55,0.18)]">
        <div className="relative h-56 overflow-hidden">
          <Image
            alt={`${service.title} example`}
            className="object-cover transition duration-700 group-hover:scale-110"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            src={service.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/76 to-transparent transition group-hover:from-rescue-600/86 group-hover:via-rescue-500/24" />
          <div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-rescue-500 shadow-premium transition group-hover:rotate-3 group-hover:scale-105 group-hover:bg-navy-950 group-hover:text-white">
            <Icon name={service.icon} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-black tracking-tight text-navy-950 transition group-hover:text-rescue-600">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 leading-7 text-slate-600 transition group-hover:text-navy-950">
            {service.description}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy-950 px-5 text-sm font-black text-white transition hover:bg-rescue-500 group-hover:bg-rescue-500"
              href={href}
            >
              Learn More
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy-100 bg-white px-5 text-sm font-black text-navy-950 transition hover:border-rescue-500 hover:bg-rescue-500 hover:text-white group-hover:border-rescue-500"
              href="/book-service"
            >
              Book
            </Link>
          </div>
        </div>
      </article>
    </StaggerItem>
  );
}

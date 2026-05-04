import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SocialLinks } from "@/components/SocialLinks";
import { company, navItems, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 pb-24 pt-16 text-white md:pb-10">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative block h-16 w-56 overflow-hidden">
              <Image
                alt={`${company.name} logo`}
                className="object-contain object-left"
                fill
                sizes="224px"
                src="/brand/footerlogo.png"
              />
            </span>
          </div>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-rescue-400">
            Licensed Restoration Services
          </p>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            Superior Restoration Services provides water removal, fire damage
            restoration, mold remediation, storm damage services, and
            commercial restoration across Central Florida.
          </p>
          <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/65">
            License: {company.licenses}. This upgraded website experience was
            created by{" "}
            <a
              className="font-black text-white underline-offset-4 transition hover:text-rescue-500 hover:underline"
              href="https://elevatedigitalstudios.net/"
              rel="noreferrer"
              target="_blank"
            >
              Elevate Digital Studio
            </a>{" "}
            with a website intake form and damage photo upload experience.
          </p>
          <div className="mt-5">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white/55">
              Follow Superior
            </p>
            <SocialLinks />
          </div>
        </div>

        <div>
          <p className="font-black">Quick Links</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                className="text-white/70 transition hover:text-rescue-500"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link className="text-white/70 transition hover:text-rescue-500" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>

        <div>
          <p className="font-black">Services</p>
          <div className="mt-4 grid gap-3">
            {services.map((service) => (
              <Link
                className="text-white/70 transition hover:text-rescue-500"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-black">Contact Info</p>
          <a
            className="mt-4 inline-flex items-center gap-2 text-2xl font-black text-rescue-400"
            href={company.phoneHref}
          >
            <Icon name="phone" className="h-5 w-5" />
            {company.phone}
          </a>
          <a
            className="mt-3 block text-sm leading-6 text-white/70 transition hover:text-rescue-500"
            href={company.emailHref}
          >
            {company.email}
          </a>
          <a
            className="mt-2 block text-sm leading-6 text-white/70 transition hover:text-rescue-500"
            href={company.addressMapsHref}
            rel="noreferrer"
            target="_blank"
          >
            {company.address}
          </a>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Serving {company.serviceArea} and surrounding communities 24/7.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/70">
            <p>
              <strong className="text-white">Hours:</strong> {company.hours}
            </p>
            <p className="mt-1">
              <strong className="text-white">Office:</strong>{" "}
              {company.officeHours}
            </p>
          </div>
          <div className="mt-5">
            <SocialLinks />
          </div>
          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-rescue-500 px-6 text-sm font-black text-white shadow-glow transition hover:bg-rescue-600"
            href="/book-service"
          >
            Book Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

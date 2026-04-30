import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { SocialLinks } from "@/components/SocialLinks";
import { company, services } from "@/lib/site";

export function ContactForm() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <aside className="glass-card rounded-[2rem] p-7" id="emergency">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
          Emergency Support
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-950">
          Tell us what happened. We will help map the next step.
        </h2>
        <p className="mt-4 leading-8 text-slate-600">
          Use the form for a free estimate or call for urgent restoration
          needs. Superior Restoration Services is available for Central Florida
          water, fire, mold, storm, and commercial restoration requests.
        </p>
        <a
          className="mt-6 flex items-center gap-3 rounded-3xl bg-navy-950 p-5 text-white transition hover:bg-rescue-500"
          href={company.phoneHref}
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/14">
            <Icon name="phone" />
          </span>
          <span>
            <span className="block text-sm text-white/70">Call now</span>
            <span className="text-xl font-black">{company.phone}</span>
          </span>
        </a>
        <div className="mt-5 grid gap-3 text-sm text-slate-600">
          <p><strong className="text-navy-950">Free estimate:</strong> Send details and photos for intake.</p>
          <p><strong className="text-navy-950">Service area:</strong> {company.serviceArea} and surrounding communities.</p>
          <p><strong className="text-navy-950">Office:</strong> {company.address}</p>
          <p><strong className="text-navy-950">License:</strong> {company.licenses}</p>
          <p><strong className="text-navy-950">Email:</strong> <a className="text-rescue-600 underline-offset-4 hover:underline" href={company.emailHref}>{company.email}</a></p>
          <p><strong className="text-navy-950">Hours:</strong> {company.hours}</p>
          <p><strong className="text-navy-950">Office hours:</strong> {company.officeHours}</p>
          <p><strong className="text-navy-950">Response expectations:</strong> Emergency calls should be made directly.</p>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
            Connect Online
          </p>
          <SocialLinks variant="light" />
        </div>
      </aside>

      <form className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-premium sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-navy-950">
            Name
            <input
              className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="name"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950">
            Phone
            <input
              className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="phone"
              placeholder="321-588-1156"
              type="tel"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950">
            Email
            <input
              className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="email"
              placeholder={company.email}
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950">
            Property Type
            <select
              className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="propertyType"
            >
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950">
            Service Needed
            <select
              className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="service"
            >
              <option>Choose a service</option>
              {services.map((service) => (
                <option key={service.slug}>{service.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950">
            Urgency
            <select
              className="min-h-12 rounded-2xl border border-navy-100 px-4 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="urgency"
            >
              <option>Emergency</option>
              <option>This week</option>
              <option>Planning ahead</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950 sm:col-span-2">
            Upload Damage Photos
            <div className="rounded-2xl border border-dashed border-navy-200 bg-navy-50 px-4 py-6 text-center text-sm text-slate-600">
              Photo upload intake ready for future storage configuration
            </div>
          </label>
          <label className="grid gap-2 text-sm font-bold text-navy-950 sm:col-span-2">
            Message
            <textarea
              className="min-h-36 rounded-2xl border border-navy-100 px-4 py-3 outline-none transition focus:border-rescue-500 focus:ring-4 focus:ring-rescue-500/10"
              name="message"
              placeholder="Briefly describe the damage, location, and timeline."
            />
          </label>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-rescue-500 px-7 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-rescue-600"
            type="button"
          >
            Request Free Estimate
          </button>
          <ButtonLink href="/book-service" variant="dark">
            Book Service
          </ButtonLink>
          <ButtonLink href={company.phoneHref} variant="ghost">
            Call Instead
          </ButtonLink>
        </div>
      </form>
    </div>
  );
}

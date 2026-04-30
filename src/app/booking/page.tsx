import { BookingForm } from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_34%),linear-gradient(180deg,#f8fafc,#ffffff)] py-16 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
            Book Service
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
            Schedule restoration help in minutes
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Frontend-only demo flow for service, urgency, property details,
            contact information, schedule preference, and confirmation.
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

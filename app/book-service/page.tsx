import type { Metadata } from "next";
import { BookingWizard } from "@/components/BookingWizard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";
import { TrustBadges } from "@/components/TrustBadges";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Service | Schedule a Free Restoration Inspection Request",
  description:
    "Request a restoration booking or free inspection for water damage, fire cleanup, mold remediation, storm damage, emergency cleanup, commercial restoration, or a general estimate in Central Florida."
};

export default function BookServicePage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Book Service"
        image={images.emergencyCrew}
        text="Request emergency help, schedule a free inspection request, or upload damage photos through a premium mobile-first booking flow."
        title="Request a restoration booking without the back-and-forth"
      />

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Booking Wizard"
            text="This front-end flow structures customer details for future CRM leads, admin dashboards, email notifications, SMS alerts, Stripe deposits, and calendar sync."
            title="A simple intake flow built for emergency restoration leads"
          />
          <Reveal direction="up">
            <div className="mt-12">
              <BookingWizard />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Trust Before Submission"
            text="The booking request experience stays clear: no charge today, no confirmed appointment until availability is verified."
            title="Premium, transparent, and easy to complete on mobile"
          />
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
      </section>
    </>
  );
}

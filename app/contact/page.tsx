import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Free Central Florida Restoration Estimate",
  description:
    "Request a free Central Florida restoration estimate for water damage, fire cleanup, mold remediation, storm damage repair, emergency cleanup, and commercial restoration."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        image={images.inspection}
        text="Send the details and get a fast response for water, fire, mold, storm, or emergency restoration needs."
        title="Request a free restoration estimate"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <ContactForm />
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Before You Submit"
            text="Use the estimator to frame urgency and service type before starting the intake."
            title="Get a smarter recommendation first"
          />
          <div className="glass-card mt-12 rounded-[2.5rem] p-6">
            <QuoteEstimator />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Ready to Help"
            text="Strong trust badges reinforce the key reasons visitors should call or submit the form."
            title="Emergency-ready restoration support"
          />
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
      </section>
    </>
  );
}

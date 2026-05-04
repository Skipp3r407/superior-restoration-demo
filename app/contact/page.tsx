import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";
import { TrustBadges } from "@/components/TrustBadges";
import { company, images } from "@/lib/site";

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
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Before You Submit"
            text="Use the estimator to frame urgency and service type before starting the intake."
            title="Get a smarter recommendation first"
          />
          <Reveal direction="right">
            <div className="glass-card mt-12 rounded-[2.5rem] p-6">
              <QuoteEstimator />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Visit Our Office"
            text={company.address}
            title="Superior Restoration Services in Central Florida"
          />
          <Reveal>
            <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-navy-100 bg-white shadow-premium">
              <iframe
                aria-label={`${company.name} map location`}
                className="h-[18rem] w-full border-0 sm:h-[24rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  company.address
                )}&output=embed`}
                title={`${company.name} map`}
              />
            </div>
          </Reveal>
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

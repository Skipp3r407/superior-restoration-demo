import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { company, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Superior Restoration Services",
  description:
    "Privacy policy for Superior Restoration Services website forms, booking requests, photo upload intake, phone calls, and restoration estimate requests."
};

const sections = [
  {
    title: "Information We Collect",
    text: "When you submit a contact form, booking request, estimate request, or photo intake, this website may collect your name, phone number, email address, property type, service needed, urgency, property address, damage description, preferred appointment window, and uploaded damage photos."
  },
  {
    title: "How Information Is Used",
    text: "Information is used to respond to restoration requests, schedule free assessments, prioritize emergency calls, communicate about water damage, fire cleanup, mold remediation, storm damage, emergency cleanup, and commercial restoration needs, and improve the customer experience."
  },
  {
    title: "Phone, Email, and SMS Follow-Up",
    text: `By submitting a request, you authorize Superior Restoration Services to contact you using the phone number or email provided. For urgent emergencies, call ${company.phone} directly instead of relying only on a form submission.`
  },
  {
    title: "Photo Uploads",
    text: "Damage photo upload areas are intended to help the team understand the affected space before an inspection. Do not upload sensitive personal documents, insurance paperwork, or images that are unrelated to the restoration request."
  },
  {
    title: "Third-Party Tools",
    text: "The site may link to third-party platforms such as Google Reviews, Google Maps, social media pages, booking tools, analytics, CRM systems, email notifications, SMS alerts, or future calendar integrations. Those platforms may have their own privacy practices."
  },
  {
    title: "No Online Payments Yet",
    text: "This website does not currently process deposits or charge customers online. If payment or Stripe deposit functionality is added later, additional payment terms and disclosures should be added before launch."
  },
  {
    title: "Contact Information",
    text: `Questions about this policy can be directed to ${company.email}, by calling ${company.phone}, or by contacting the office at ${company.address}.`
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Privacy Policy"
        image={images.inspection}
        text="How website inquiries, booking requests, emergency contact details, and restoration intake information are handled."
        title="Privacy and website data policy"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <Reveal direction="left">
              <p className="rounded-3xl bg-navy-50 p-5 leading-7 text-slate-600">
                This policy is written for the upgraded Superior Restoration
                Services website experience. It should be reviewed by the business
                owner or legal counsel before publishing as a final legal policy.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5">
              {sections.map((section, index) => (
                <Reveal
                  direction={index % 2 === 0 ? "left" : "right"}
                  key={section.title}
                >
                  <article className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-black text-navy-950">
                      {section.title}
                    </h2>
                    <p className="mt-3 leading-8 text-slate-600">{section.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need help with water, fire, mold, or storm damage?"
        text="Request a booking or call Superior Restoration Services directly for urgent Central Florida restoration support."
      />
    </>
  );
}

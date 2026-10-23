import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { JobPhotoGrid } from "@/components/JobPhotoGrid";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real job photos from Superior Restoration Services: water extraction, flood cuts, drying equipment and storm cleanup across Central Florida."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        image="/jobs/water-13.webp"
        text="Real photos from Superior Restoration jobs: extraction, flood cuts, drying and storm cleanup."
        title="Recent restoration jobs"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Recent Jobs"
            text="Photos taken on Superior Restoration job sites."
            title="From the job site"
          />
          {/* No Reveal here: the grid is taller than a phone screen x 5, so an amount-based reveal never fires */}
          <div className="mt-12">
            <JobPhotoGrid />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Service Examples"
            text="Royalty-free visuals for the kinds of work the company handles. These are not presented as completed client projects."
            title="Service Examples"
          />
          <Reveal direction="up">
            <div className="mt-12">
              <GalleryGrid filterable />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

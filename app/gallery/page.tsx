import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Restoration Service Examples | Superior Restoration Services",
  description:
    "Royalty-free restoration service example visuals for water damage, fire cleanup, mold remediation, storm damage, and commercial restoration."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Examples"
        image={images.repairs}
        text="Royalty-free visual examples for restoration scenarios. These images are not presented as completed client projects."
        title="Restoration service examples"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Gallery"
            text="Use this section to communicate the kinds of work the company handles while avoiding false claims about specific past projects."
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

import type { Metadata } from "next";
import { MoldRiskCheck } from "@/components/MoldRiskCheck";
import { PageHero } from "@/components/PageHero";
import { specialtyImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free 1-Minute Mold Risk Check",
  description: "Answer 8 quick questions about smells, leaks, humidity and symptoms to see your home's mold risk, then book a free inspection in Central Florida."
};

export default function MoldRiskCheckPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Mold Risk Check"
        image={specialtyImages.moldWall}
        text="Eight yes-or-no questions. About a minute. Get your risk level and the right next step."
        title="Do you have a mold problem?"
      />
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <MoldRiskCheck />
        </div>
      </section>
    </>
  );
}

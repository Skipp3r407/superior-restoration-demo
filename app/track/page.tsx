import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TrackJob } from "@/components/TrackJob";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Track Your Restoration Job",
  description: "Check the stage of your water, mold or fire restoration job, your next visit and your reports with your request number."
};

export default function TrackPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Track My Job"
        image={images.emergencyCrew}
        text="Enter your request number to see where your job stands, when we're back, and your reports."
        title="Your job, step by step"
      />
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <TrackJob />
        </div>
      </section>
    </>
  );
}

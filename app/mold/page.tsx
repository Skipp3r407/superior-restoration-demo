import type { Metadata } from "next";
import { MoldCenter } from "@/components/MoldCenter";
import { ServiceSectionPage } from "@/components/ServiceSectionPage";
import { serviceSectionPages } from "@/lib/site";

const section = serviceSectionPages.find((item) => item.slug === "mold")!;

export const metadata: Metadata = {
  title: "Mold Inspection, Testing & Remediation in Central Florida",
  description: section.description
};

export default function MoldPage() {
  return (
    <>
      <ServiceSectionPage section={section} />
      <MoldCenter />
    </>
  );
}

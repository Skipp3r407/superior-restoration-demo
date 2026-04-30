import type { Metadata } from "next";
import { ServiceSectionPage } from "@/components/ServiceSectionPage";
import { serviceSectionPages } from "@/lib/site";

const section = serviceSectionPages.find((item) => item.slug === "water")!;

export const metadata: Metadata = {
  title: "Water Restoration Services in Central Florida",
  description: section.description
};

export default function WaterPage() {
  return <ServiceSectionPage section={section} />;
}

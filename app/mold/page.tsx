import type { Metadata } from "next";
import { ServiceSectionPage } from "@/components/ServiceSectionPage";
import { serviceSectionPages } from "@/lib/site";

const section = serviceSectionPages.find((item) => item.slug === "mold")!;

export const metadata: Metadata = {
  title: "Mold Restoration Services in Central Florida",
  description: section.description
};

export default function MoldPage() {
  return <ServiceSectionPage section={section} />;
}

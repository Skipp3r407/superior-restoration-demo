import type { Metadata } from "next";
import { ServiceSectionPage } from "@/components/ServiceSectionPage";
import { serviceSectionPages } from "@/lib/site";

const section = serviceSectionPages.find((item) => item.slug === "fire")!;

export const metadata: Metadata = {
  title: "Fire Restoration Services in Central Florida",
  description: section.description
};

export default function FirePage() {
  return <ServiceSectionPage section={section} />;
}

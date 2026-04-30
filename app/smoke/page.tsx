import type { Metadata } from "next";
import { ServiceSectionPage } from "@/components/ServiceSectionPage";
import { serviceSectionPages } from "@/lib/site";

const section = serviceSectionPages.find((item) => item.slug === "smoke")!;

export const metadata: Metadata = {
  title: "Smoke Cleaning Services in Central Florida",
  description: section.description
};

export default function SmokePage() {
  return <ServiceSectionPage section={section} />;
}

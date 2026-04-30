import type { Metadata } from "next";
import { ServiceSectionPage } from "@/components/ServiceSectionPage";
import { serviceSectionPages } from "@/lib/site";

const section = serviceSectionPages.find((item) => item.slug === "other-services")!;

export const metadata: Metadata = {
  title: "Commercial Restoration and Other Services in Central Florida",
  description: section.description
};

export default function OtherServicesPage() {
  return <ServiceSectionPage section={section} />;
}

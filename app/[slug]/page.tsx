import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { allServicePages } from "@/lib/site";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allServicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = allServicePages.find((item) => item.slug === params.slug);

  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription
    };
  }

  return {};
}

export default function RootServiceAliasPage({ params }: PageProps) {
  const service = allServicePages.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  redirect(`/services/${service.slug}`);
}

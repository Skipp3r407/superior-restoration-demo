import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { allServicePages } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allServicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = allServicePages.find((item) => item.slug === slug);

  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription
    };
  }

  return {};
}

export default async function RootServiceAliasPage({ params }: PageProps) {
  const { slug } = await params;
  const service = allServicePages.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  redirect(`/services/${service.slug}`);
}

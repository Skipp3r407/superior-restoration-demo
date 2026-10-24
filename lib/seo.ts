import { allServicePages, company, serviceNavGroups, type Service } from "@/lib/site";

export const SITE_URL = "https://superiorrestorationsfl.com";

/** Water services live at /water/<slug>; every other service lives at /services/<slug>. */
export const waterSlugs = (serviceNavGroups.find((group) => group.label === "Water")?.items ?? [])
  .map((item) => item.href.split("/").filter(Boolean).at(-1))
  .filter((slug): slug is string => Boolean(slug));

export const servicePath = (slug: string) => (waterSlugs.includes(slug) ? `/water/${slug}` : `/services/${slug}`);

/** Service + breadcrumb structured data for one service page. */
export function serviceSchema(service: Service) {
  const url = SITE_URL + servicePath(service.slug);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.shortTitle,
      description: service.description,
      url,
      areaServed: { "@type": "AdministrativeArea", name: "Central Florida" },
      provider: { "@type": "HomeAndConstructionBusiness", name: company.name, telephone: company.phone, url: SITE_URL }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: url }
      ]
    }
  ];
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
  };
}

export const indexedServices = allServicePages;

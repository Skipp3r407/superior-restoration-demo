import type { MetadataRoute } from "next";
import { indexedServices, servicePath, SITE_URL } from "@/lib/seo";

const pages: [string, number][] = [
  ["/", 1],
  ["/services", 0.9],
  ["/water", 0.9],
  ["/mold", 0.9],
  ["/fire", 0.8],
  ["/smoke", 0.7],
  ["/other-services", 0.6],
  ["/book-service", 0.9],
  ["/insurance-claims", 0.7],
  ["/mold-risk-check", 0.6],
  ["/gallery", 0.6],
  ["/about", 0.6],
  ["/contact", 0.7],
  ["/privacy", 0.2]
];

/** Every real page, once, at its canonical address (old /<slug> URLs redirect and are left out). */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map(([path, priority]) => ({ url: SITE_URL + (path === "/" ? "" : path), lastModified, priority })),
    ...indexedServices.map((service) => ({ url: SITE_URL + servicePath(service.slug), lastModified, priority: 0.8 }))
  ];
}

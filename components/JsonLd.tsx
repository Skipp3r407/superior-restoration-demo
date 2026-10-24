/** Structured data for search engines (schema.org JSON-LD). */
export function JsonLd({ data }: { data: object | object[] }) {
  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />;
}

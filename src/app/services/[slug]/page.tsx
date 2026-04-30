import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/utils";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
              Restoration Service
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {service.text} This page is ready for deeper SEO copy,
              local service-area targeting, FAQs, case studies, and conversion
              tracking.
            </p>
          </div>
          <div className="relative h-[24rem] overflow-hidden rounded-[2rem] shadow-premium">
            <Image
              alt={`${service.title} service`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={service.image}
            />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

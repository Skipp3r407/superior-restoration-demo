import { Quote, Star } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { company, testimonials } from "@/lib/site";

export function TestimonialSection() {
  return (
    <section className="bg-navy-50 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Google Reviews"
          text={`Superior Restoration Services is shown with a ${company.googleRating} Google rating from ${company.googleReviewCount} public reviews.`}
          title="Customer experiences from Google review highlights"
        />
        <div className="group mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 rounded-[2rem] bg-white p-5 text-center shadow-sm ring-1 ring-navy-100 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.24)] sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="flex justify-center gap-1 text-rescue-500 transition group-hover:text-white sm:justify-start">
              {[...Array(5)].map((_, index) => (
                <Star className="h-5 w-5 fill-current" key={index} />
              ))}
            </div>
            <p className="mt-2 text-2xl font-black text-navy-950 transition group-hover:text-white">
              {company.googleRating} Google Rating
            </p>
            <p className="text-sm font-bold text-slate-500 transition group-hover:text-white/78">
              Based on {company.googleReviewCount} public Google reviews
            </p>
          </div>
          <ButtonLink href={company.googleReviewsHref} variant="dark">
            View Google Reviews
          </ButtonLink>
        </div>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <article className="group glass-card h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:bg-rescue-500">
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-8 w-8 text-rescue-500 transition group-hover:text-white" />
                  <div className="flex gap-0.5 text-rescue-500 transition group-hover:text-white">
                    {[...Array(5)].map((_, index) => (
                      <Star className="h-4 w-4 fill-current" key={index} />
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-lg leading-8 text-slate-700 transition group-hover:text-white/90">“{item.quote}”</p>
                <div className="mt-6 border-t border-navy-100 pt-5 transition group-hover:border-white/30">
                  <p className="font-black text-navy-950 transition group-hover:text-white">{item.name}</p>
                  <p className="text-sm font-bold text-slate-500 transition group-hover:text-white/78">{item.context}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";

import { CheckoutPageContent } from "@/components/checkout/CheckoutPageContent";
import { getCourseById } from "@/lib/courses";
import { getCourseDetailBySlug } from "@/lib/course-detail/registry";

interface Params {
   courseId: string;
   plan?: string[];
}

export default async function CourseCheckoutPage({
   params,
}: {
   params: Promise<Params>;
}) {
   const { courseId, plan } = await params;
   const course = getCourseById(courseId);

   if (!course) {
      notFound();
   }

   const detail = getCourseDetailBySlug(courseId);
   const checkoutDetail = detail
      ? {
           slug: detail.slug,
           hero: {
              ...detail.hero,
              metrics: detail.hero.metrics.map((metric) => ({ ...metric })),
              primaryCta: { ...detail.hero.primaryCta },
              secondaryCta: detail.hero.secondaryCta
                 ? { ...detail.hero.secondaryCta }
                 : undefined,
           },
           pricing: detail.pricing.map((tier) => ({
              ...tier,
              features: [...tier.features],
           })),
           testimonials: detail.testimonials.map((testimonial) => ({
              ...testimonial,
           })),
        }
      : undefined;
   const planSlug = plan?.[0];

   return (
      <CheckoutPageContent
         course={course}
         detail={checkoutDetail}
         initialPlanSlug={planSlug}
      />
   );
}

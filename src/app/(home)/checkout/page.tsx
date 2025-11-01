import { GeneralCheckoutPageContent } from "@/components/checkout/GeneralCheckoutPageContent";
import { courses } from "@/lib/courses";

interface SearchParams {
   plan?: string;
}

export default async function GeneralCheckoutPage({
   searchParams,
}: {
   searchParams: Promise<SearchParams>;
}) {
   const { plan } = await searchParams;

   return (
      <GeneralCheckoutPageContent courses={courses} initialPlanSlug={plan} />
   );
}

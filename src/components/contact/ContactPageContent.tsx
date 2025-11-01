import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { CreatorHighlights } from "@/components/contact/CreatorHighlights";
import { CreatorTimeline } from "@/components/contact/CreatorTimeline";
import { CreatorValues } from "@/components/contact/CreatorValues";
import { FieldGuideHighlight } from "@/components/contact/FieldGuideHighlight";
import type {
   ContactChannel,
   CreatorCallToAction,
   CreatorMilestone,
   CreatorProfile,
   CreatorStat,
   CreatorValue,
   FieldGuideHighlight as FieldGuideHighlightType,
} from "@/lib/contact-content";

interface ContactPageContentProps {
   profile: CreatorProfile;
   stats: CreatorStat[];
   values: CreatorValue[];
   channels: ContactChannel[];
   milestones: CreatorMilestone[];
   cta: CreatorCallToAction;
   fieldGuide: FieldGuideHighlightType;
}

export function ContactPageContent({
   profile,
   stats,
   values,
   channels,
   milestones,
   cta,
   fieldGuide,
}: ContactPageContentProps) {
   return (
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-16 pb-24 pt-12 sm:gap-20 sm:pt-16'>
         <ContactHero profile={profile} cta={cta} />

         <CreatorHighlights stats={stats} />

         <CreatorValues values={values} />

         <ContactChannels channels={channels} />

         <CreatorTimeline milestones={milestones} />

         <FieldGuideHighlight highlight={fieldGuide} />

         <ContactForm />
      </div>
   );
}

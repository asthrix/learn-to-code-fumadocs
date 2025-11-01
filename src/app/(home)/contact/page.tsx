import { ContactPageContent } from "@/components/contact/ContactPageContent";
import {
   contactChannels,
   creatorProfile,
   creatorStats,
   creatorTimeline,
   creatorValues,
   discoveryCallCta,
   fieldGuideHighlight,
} from "@/lib/contact-content";

export default function ContactPage() {
   return (
      <main className='relative flex flex-1 flex-col bg-background text-foreground transition-colors'>
         <ContactPageContent
            profile={creatorProfile}
            stats={creatorStats}
            values={creatorValues}
            channels={contactChannels}
            milestones={creatorTimeline}
            cta={discoveryCallCta}
            fieldGuide={fieldGuideHighlight}
         />
      </main>
   );
}

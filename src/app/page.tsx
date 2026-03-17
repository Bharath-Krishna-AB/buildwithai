import { Loader } from "@/components/ui/Loader";
import { Hero } from "@/components/Hero";
import { WhatIsThis } from "@/components/WhatIsThis";
import { WhyCareCards } from "@/components/WhyCareCards";
import { WhatYouGet } from "@/components/WhatYouGet";
import { EventDayFlow } from "@/components/EventDayFlow";
import { SelectionProcess } from "@/components/SelectionProcess";
import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <WhatIsThis />
      <WhyCareCards />
      <WhatYouGet />
      <SelectionProcess />
      <EventDayFlow />
      <Partners />
      <FinalCTA />
      
      {/* Minimal Footer */}
      <footer className="py-8 text-center text-sm text-gray-600 border-t border-white/5">
        <p>© 2024 µLearn × Google. All rights reserved.</p>
      </footer>
    </>
  );
}

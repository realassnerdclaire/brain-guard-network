import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { ProblemSection, UrgencySection, SolutionSection, EdgeSection } from "@/components/marketing/NavigationSections";

const Index = () => {
  return (
    <main className="relative">
      <HeroXBrainer />
      <ProblemSection />
      <UrgencySection />
      <SolutionSection />
      <EdgeSection />
    </main>
  );
};

export default Index;
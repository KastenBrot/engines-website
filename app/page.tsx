import Games from "@/components/Games";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Results from "@/components/Results";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <Results />
      <Games />
      <Partners />
    </main>
  );
}

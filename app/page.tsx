import Games from "@/components/Games";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import About from "@/components/About";
import MembersSection from "@/components/MembersSection";
import LatestMatches from "@/components/LatestMatches";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <About />
      <Games />
      <LatestMatches />
      <MembersSection />
      <Partners />
    </>
  );
}

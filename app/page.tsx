import Games from "@/components/Games";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <About />
      <Games />
      <Partners />
    </>
  );
}

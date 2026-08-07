import Image from "next/image";
import Hero from "./components/hero-section/hero";
import About from "./components/about-section/about";
import Experience from "./components/experience-section/Experience";

export default function Home() {
  return (
    <div suppressHydrationWarning className="px-0.5">
       <Hero/>
       <About/>
       <Experience/>

    </div>
     
  );
}

import Image from "next/image";
import Hero from "./components/hero-section/hero";
import About from "./components/about-section/about";
import Experience from "./components/experience-section/Experience";
import Skills from "./components/skill-section/skills";
import Projects from "./components/project-section/project";
import { Education } from "./components/education-section/education";
import Contact from "./components/contact-section/contact";

export default function Home() {
  return (
    <div suppressHydrationWarning className="px-0.5">
       <Hero/>
       <About/>
       <Experience/>
       <Skills/>
       <Projects/>
       <Education />
       <Contact/>
    </div>
     
  );
}

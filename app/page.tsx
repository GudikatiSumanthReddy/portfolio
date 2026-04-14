import Navbar from "@/commonComponents/navbar";
import Hero from "@/commonComponents/hero";
import Projects from "@/commonComponents/projects";
import Experience from "@/commonComponents/experience";
import Contact from "@/commonComponents/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience/>
      <Contact/>
    </>
  );
}
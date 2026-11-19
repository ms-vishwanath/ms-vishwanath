import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Expertise from "@/components/sections/expertise";
import Work from "@/components/sections/work";
import Architecture from "@/components/sections/architecture";
import { AI, Contact, Leadership, Venture } from "@/components/sections/rest";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Architecture />
        <AI />
        <Leadership />
        <Venture />
        <Contact />
      </main>
    </>
  );
}

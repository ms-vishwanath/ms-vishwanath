import Minimap from "@/components/minimap";
import { Drive, Road } from "@/components/game/drive";
import Start from "@/components/sections/start";
import About from "@/components/sections/about";
import Expertise from "@/components/sections/expertise";
import Work from "@/components/sections/work";
import Architecture from "@/components/sections/architecture";
import { AI, Contact, Leadership, Venture } from "@/components/sections/rest";

export default function Page() {
  return (
    <>
      <Minimap />
      <Drive />
      <main className="relative">
        <Road />
        <Start />
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

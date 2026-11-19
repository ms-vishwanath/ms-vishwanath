"use client";

import { GarageArt } from "@/components/illustrations";
import { Section } from "@/components/ui";
import AllProjects from "./all-projects";

export default function Work() {
  return (
    <Section id="work" index="03" label="Garage" tint="#ffe4f1" accent="#ec4899" art={<GarageArt />} title="The garage — 70+ projects built and shipped." lead="Every live project I've shipped, parked in one place. Filter by category, search, and take any of them for a spin.">
      <AllProjects />
    </Section>
  );
}

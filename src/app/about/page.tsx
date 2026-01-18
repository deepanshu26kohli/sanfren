import React from "react";
import AboutHero from "@/components/about/AboutHero";
import IndustryFocus from "@/components/about/IndustryFocus";
import VisionMission from "@/components/about/VisionMission";
import HowWeWork from "@/components/about/HowWeWork";

export default function About() {
    return (
        <div className="flex flex-col">
            <AboutHero />
            <VisionMission />
            <IndustryFocus />
            <HowWeWork />
        </div>
    );
}

import type { Metadata } from "next";
import { indexableRobots } from "@src/utils/metadata";
import GreetingSection from "@src/components/pages/home/greeting-section";
import AboutSection from "@src/components/pages/home/about-section";
import ExperienceSection from "@src/components/pages/home/experience-section";
import ContactSection from "@src/components/pages/home/contact-section";

export const metadata: Metadata = {
    robots: indexableRobots
};

export default function Page() {
    return (
        <>
            <GreetingSection />
            <AboutSection />
            <ExperienceSection />
            <ContactSection />
        </>
    );
}

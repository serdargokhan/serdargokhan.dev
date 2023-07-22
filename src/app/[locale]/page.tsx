import GreetingSection from "@src/components/pages/home/GreetingSection";
import AboutSection from "@src/components/pages/home/AboutSection";
import PortfolioSection from "@src/components/pages/home/PortfolioSection";
import ContactSection from "@src/components/pages/home/ContactSection";

export default function Page() {
    return (
        <>
            <GreetingSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
        </>
    );
}

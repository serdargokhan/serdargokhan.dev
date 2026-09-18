import GreetingSection from "@src/components/pages/home/greeting-section";
import AboutSection from "@src/components/pages/home/about-section";
import PortfolioSection from "@src/components/pages/home/portfolio-section";
import ContactSection from "@src/components/pages/home/contact-section";

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

import { cache } from "react";
import { getMessages } from "next-intl/server";

export const loadClientTranslations = cache(async () => {
    const messages = await getMessages();

    return {
        Navigation: messages.Navigation,
        Footer: messages.Footer,
        Error: messages.Error,
        LocaleDetector: messages.LocaleDetector,
        Home: {
            ContactSection: messages.Home.ContactSection
        }
    };
});

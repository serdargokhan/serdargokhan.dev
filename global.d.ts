import messages from "./translations/en.json";
import type { Locale } from "./src/types/locale";

declare module "next-intl" {
    interface AppConfig {
        Locale: Locale;
        Messages: typeof messages;
    }
}

declare global {
    type Messages = typeof messages;
}

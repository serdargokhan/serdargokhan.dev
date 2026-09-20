import { useTranslations } from "next-intl";

export default function SkipToContent() {
    const t = useTranslations("Layout");

    return (
        <a className="skip-link" href="#main-content">
            {t("skip-to-content")}
        </a>
    );
}

import { useTranslations } from "next-intl";

function NavItems() {
    const t = useTranslations("Navigation");

    return (
        <ul className="flex items-center justify-between gap-2 font-semibold text-primary-400 sm:gap-4">
            <li className="cursor-pointer hover:text-primary-100 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#about">{t("about")}</a>
            </li>
            <li className="cursor-pointer hover:text-primary-100 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#projects">{t("projects")}</a>
            </li>
            <li className="cursor-pointer hover:text-primary-100 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#contact">{t("contact")}</a>
            </li>
            <li>
                <a
                    className="rounded-full border-2 border-primary-100 px-3 py-1.5 transition hover:bg-primary-100 hover:text-primary-300 hover:shadow-primary-400"
                    href="/static/resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {t("resume")}
                </a>
            </li>
        </ul>
    );
}

export default NavItems;

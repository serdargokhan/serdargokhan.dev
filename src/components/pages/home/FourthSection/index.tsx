import { useTranslations } from "next-intl";
import ContactImage from "@public/images/pages/home/contact.svg";
import { NextImage } from "@src/components/common";

function FourthSection() {
    const t = useTranslations("Home.FourthSection");

    return (
        <section
            className="flex min-h-[calc(100vh-64px)] items-center bg-primary-400"
            id="contact"
        >
            <div className="flex container cursor-default items-center justify-between gap-20 py-16">
                <div className="grid gap-4 md:w-1/2 text-primary-300 font-semibold">
                    <h2 className="text-6xl font-bold">{t("title")}</h2>
                    <p>{t("paragraph-one")}</p>
                    <p>{t("paragraph-two")}</p>
                    <a
                        className="rounded-full border-2 border-primary-200 bg-primary-200 px-6 py-3 text-white transition-all hover:bg-primary-400 hover:text-primary-300 w-fit"
                        href="mailto:gokhan_bakirci_53@hotmail.com?subject=Hello!"
                    >
                        {t("cta")}
                    </a>
                </div>
                <div className="hidden md:inline-block">
                    <NextImage
                        width={600}
                        height={400}
                        src={ContactImage}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default FourthSection;

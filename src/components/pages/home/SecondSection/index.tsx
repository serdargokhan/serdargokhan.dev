import { useTranslations } from "next-intl";
import AboutMeImage from "@public/images/pages/home/about-me.svg";
import { NextImage } from "@src/components/common";

function SecondSection() {
    const t = useTranslations("Home.SecondSection");

    return (
        <section
            className="flex min-h-screen items-center bg-primary-200 py-20"
            id="about"
        >
            <div className="flex container cursor-default items-center justify-between gap-20">
                <div className="hidden md:inline-block">
                    <NextImage
                        src={AboutMeImage}
                        width={600}
                        height={400}
                        alt=""
                    />
                </div>
                <div className="grid gap-4 md:w-1/2 text-white font-semibold">
                    <h2 className="text-6xl font-bold text-primary-100">
                        {t("title")}
                    </h2>
                    <p>{t("paragraph-one")}</p>
                    <p>{t("paragraph-two")}</p>
                    <p>{t("paragraph-three")}</p>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;

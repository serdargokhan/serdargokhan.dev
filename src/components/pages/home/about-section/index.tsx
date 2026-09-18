import { useTranslations } from "next-intl";
import NextImage from "@src/components/common/next-image";
import AboutMeImage from "@public/images/pages/home/about-me.svg";

export default function AboutSection() {
    const t = useTranslations("Home.AboutSection");

    return (
        <section className="flex items-center bg-blue" id="about">
            <div className="container grid items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
                <NextImage
                    className="mx-auto h-auto w-full max-w-md lg:max-w-none"
                    src={AboutMeImage}
                    alt=""
                />
                <div className="grid gap-5">
                    <h2 className="text-4xl font-extrabold tracking-tight text-yellow sm:text-5xl lg:text-6xl">
                        {t("title")}
                    </h2>
                    <div className="grid max-w-prose gap-4 text-lg leading-relaxed font-medium text-pretty text-white/90">
                        <p>{t("paragraph-one")}</p>
                        <p>{t("paragraph-two")}</p>
                        <p>{t("paragraph-three")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

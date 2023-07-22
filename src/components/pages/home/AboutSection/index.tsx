"use client";

import { useTranslations } from "next-intl";
import { NextImage } from "@src/components/common";
import AboutMeImage from "@public/images/pages/home/about-me.svg";

export default function AboutSection() {
    const t = useTranslations("Home.AboutSection");

    return (
        <section
            className="section-height flex items-center bg-primary-200"
            id="about"
        >
            <div className="container grid cursor-default place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
                <NextImage src={AboutMeImage} alt="" />
                <div className="grid gap-4 font-semibold text-white">
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

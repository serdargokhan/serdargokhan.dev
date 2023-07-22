"use client";

import { useTranslations } from "next-intl";
import { NextImage } from "@src/components/common";
import GreetingImage from "@public/images/pages/home/greeting.svg";

function FirstSection() {
    const t = useTranslations("Home.FirstSection");

    return (
        <section className="section-height flex items-center bg-primary-400">
            <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
                <div className="grid cursor-default gap-4 text-primary-300">
                    <span className="text-primary-200">{t("greeting")}</span>
                    <h1 className="text-6xl font-bold">{t("name")}</h1>
                    <p className="text-3xl italic">{t("title")}</p>
                    <p className="font-semibold">{t("paragraph-one")}</p>
                    <p className="font-semibold">
                        {t.rich("paragraph-two", {
                            link: children => (
                                <a
                                    href="https://www.entererp.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="hover: text-primary-200 underline-offset-2 hover:cursor-pointer hover:underline"
                                >
                                    {children}
                                </a>
                            )
                        })}
                    </p>
                </div>
                <NextImage src={GreetingImage} priority alt="" />
            </div>
        </section>
    );
}

export default FirstSection;

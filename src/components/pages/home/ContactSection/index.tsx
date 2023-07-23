"use client";

import { useTranslations } from "next-intl";
import { NextImage, NextLink } from "@src/components/common";
import ContactImage from "@public/images/pages/home/contact.svg";

export default function ContactSection() {
    const t = useTranslations("Home.ContactSection");

    return (
        <section
            className="last-section-height flex items-center bg-primary-400"
            id="contact"
        >
            <div className="container grid cursor-default place-items-center gap-12 max-lg:py-12 lg:grid-cols-2 lg:gap-20">
                <div className="grid gap-4 font-semibold text-primary-300">
                    <h2 className="text-3xl font-bold md:text-6xl">
                        {t("title")}
                    </h2>
                    <p>{t("paragraph-one")}</p>
                    <p>{t("paragraph-two")}</p>
                    <NextLink
                        className="w-fit rounded-full border-2 border-primary-200 bg-primary-200 px-6 py-3 text-white transition-all hover:bg-primary-400 hover:text-primary-300"
                        href="mailto:gokhan_bakirci_53@hotmail.com?subject=Hello!"
                    >
                        {t("cta")}
                    </NextLink>
                </div>
                <NextImage src={ContactImage} alt="" />
            </div>
        </section>
    );
}

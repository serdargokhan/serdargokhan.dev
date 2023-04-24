import { useTranslations } from "next-intl";
import GreetingImage from "@public/images/pages/home/greeting.svg";
import { NextImage } from "@src/components/common";

function FirstSection() {
    const t = useTranslations("Home.FirstSection");

    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center bg-main-pattern py-20">
            <div className="flex items-center justify-between gap-20 container">
                <div className="grid cursor-default gap-3 md:w-1/2">
                    <span className="text-primary-200">{t("greeting")}</span>
                    <h1 className="text-6xl font-bold text-primary-300">
                        {t("name")}
                    </h1>
                    <p className="text-3xl italic text-primary-300">
                        {t("title")}
                    </p>
                    <p className="font-semibold text-primary-300">
                        {t("paragraph-one")}
                    </p>
                    <p className="font-semibold text-primary-300">
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
                <div className="hidden md:inline-block">
                    <NextImage
                        src={GreetingImage}
                        width={600}
                        height={400}
                        priority
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default FirstSection;

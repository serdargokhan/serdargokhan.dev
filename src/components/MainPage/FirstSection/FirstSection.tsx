import MainSVG from "public/FirstSection/Main.svg";
import { NextImage } from "src/components/common";

function FirstSection() {
    return (
        <main className="min-h-[calc(100vh-64px)] flex w-full items-center bg-primary-100 py-20">
            <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between gap-20">
                <div className="flex w-full cursor-default flex-col gap-3 md:w-1/2">
                    <p className="text-md text-primary-200">
                        Hey there, my name is
                    </p>
                    <h1 className="text-6xl font-bold text-primary-300">
                        Serdar Gökhan.
                    </h1>
                    <p className="text-3xl italic text-primary-300">
                        A passionate Front-End Developer
                    </p>
                    <p className="my-4 text-justify text-lg font-semibold text-primary-300">
                        I&apos;m a front-end developer and also a mechatronics
                        engineer building scalable, cross-browser compatible,
                        performant, and responsive websites located in İstanbul.
                        Feel free to take a look at my latest projects a little
                        bit below this page. Currently, I&apos;m producing
                        valuable, user-friendly websites at{" "}
                        <a
                            href="https://www.entererp.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="hover: text-primary-200 underline-offset-2 hover:cursor-pointer hover:underline"
                        >
                            EnterERP
                        </a>
                        .
                    </p>
                </div>
                <div className="hidden md:inline-block">
                    <NextImage
                        src={MainSVG}
                        width={600}
                        height={400}
                        priority
                        alt=""
                    />
                </div>
            </div>
        </main>
    );
}

export default FirstSection;

import Image from "next/image";
// Assets
import MainSVG from "public/FirstSection/Main.svg";

function FirstSection() {
    return (
        <main className="calc-height flex w-full items-center bg-primary-100">
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
                    <p className="my-4 text-lg font-semibold text-primary-300">
                        I'm a front-end developer also a mechatronics engineer
                        building scalable, cross-browser compatible, performant,
                        and responsive websites located in İstanbul. Feel free
                        to take a look at my latest projects a little bit below
                        this page. Currently, I'm producing valuable,
                        user-friendly websites at{" "}
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
                <div className="hidden w-1/2 md:inline-block">
                    <Image
                        src={MainSVG}
                        width={600}
                        height={450}
                        priority
                        alt="Main Portfolio Introducer"
                    />
                </div>
            </div>
        </main>
    );
}

export default FirstSection;

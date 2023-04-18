import Image from "next/image";
import MainSVG from "public/SecondSection/Main.svg";

function SecondSection() {
    const myAge = new Date().getFullYear() - 1997;

    return (
        <section
            className="flex min-h-screen w-full items-center bg-primary-200 py-20"
            id="about"
        >
            <div className=" mx-auto flex w-11/12 max-w-7xl cursor-default items-center justify-between gap-20">
                <div className="hidden md:inline-block">
                    <Image
                        src={MainSVG}
                        width={600}
                        height={450}
                        alt="About Me Section"
                    />
                </div>
                <div className="flex w-full flex-col gap-6 text-justify md:w-1/2">
                    <p className="text-6xl font-bold text-primary-100">
                        About Me
                    </p>
                    <p className="text-lg font-semibold text-white">
                        Hello! My name is Serdar Gökhan. I am a mechatronics
                        engineer who graduated from Marmara University. I am{" "}
                        {myAge} years old. I live in İstanbul, Turkey. I started
                        my programming journey when I was in the university.
                    </p>
                    <p className="text-lg font-semibold text-white">
                        In June 2021, I started my web development journey. I
                        have first started learning HTML, CSS, and JavaScript I
                        had no idea back then what was these languages even are.
                        My learning pace was slowly because I wanted to
                        understand most of the topics deeply.
                    </p>
                    <p className="text-lg font-semibold text-white">
                        Thanks to having a good understanding of web development
                        basics, It was not that much hard to learn React for me.
                        In a few months, I learned lots of frameworks and
                        libraries such as ReactJS, NextJS, TailwindCSS,
                        TypeScript, and so many tools. I have developed dozens
                        of projects with these frameworks and tools along the
                        road. My goal is to continue this path and become much
                        more...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;

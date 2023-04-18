import MainSVG from "public/SecondSection/Main.svg";
import { NextImage } from "src/components/common";

function SecondSection() {
    return (
        <section
            className="flex min-h-screen w-full items-center bg-primary-200 py-20"
            id="about"
        >
            <div className=" mx-auto flex w-11/12 max-w-7xl cursor-default items-center justify-between gap-20">
                <div className="hidden md:inline-block">
                    <NextImage src={MainSVG} width={600} height={400} alt="" />
                </div>
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                    <p className="text-6xl font-bold text-primary-100">
                        About Me
                    </p>
                    <p className="font-semibold text-white">
                        Greetings! My name is Serdar Gökhan, and I am a
                        mechatronics engineer who graduated from Marmara
                        University. Currently residing in İstanbul, Turkey, I
                        began my programming journey while still in university,
                        and in June 2021, I set out to embark on a web
                        development journey.
                    </p>
                    <p className="font-semibold text-white">
                        I started by learning the fundamentals of HTML, CSS, and
                        JavaScript, and while it was challenging, I took the
                        time to ensure a strong understanding of these
                        languages. This foundation has allowed me to quickly
                        pick up more advanced frameworks and libraries, such as
                        ReactJS, NextJS, TailwindCSS, and TypeScript.
                    </p>
                    <p className="font-semibold text-white">
                        Along the way, I have developed numerous projects, and
                        my goal is to continue to hone my skills and become an
                        even better developer. I am excited to see where this
                        journey takes me, as there is always so much to explore
                        in the ever-changing world of web development.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;

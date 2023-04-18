import Image from "next/image";
import Contact from "public/Footer/Contact.svg";

function Footer() {
    return (
        <footer
            className="flex min-h-screen w-full items-center bg-primary-400"
            id="contact"
        >
            <div className="mx-auto flex w-11/12 max-w-7xl cursor-default items-center justify-between gap-20 py-16">
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                    <p className="text-6xl font-bold text-primary-300">
                        Contact Me
                    </p>
                    <p className="text-justify text-lg font-semibold text-primary-300">
                        Now, here we are in the best part. If you have any
                        questions or you want to say just hi, feel free to
                        contact me. I will do my best to reply as soon as
                        possible.
                    </p>
                    <a
                        className="w-fit"
                        href="mailto:gokhan_bakirci_53@hotmail.com?subject=Hello!"
                    >
                        <button className="rounded-md border-2 border-primary-200 bg-primary-200 px-6 py-3 text-white transition-all hover:bg-primary-400  hover:text-primary-300">
                            Say Hello!
                        </button>
                    </a>
                </div>
                <div className="hidden md:inline-block">
                    <Image
                        width={600}
                        height={450}
                        src={Contact}
                        alt="Contact Me"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

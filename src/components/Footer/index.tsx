import Contact from "public/Footer/Contact.svg";
import { NextImage } from "../common";

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
                    <p className="font-semibold text-primary-300">
                        If you have any inquiries or would like to discuss a
                        potential project, feel free to reach out to me through
                        the contact email provided below. I&apos;m always open
                        to collaboration and love working with new clients.
                        Additionally, if you simply want to connect or have any
                        questions about my work, don&apos;t hesitate to drop me
                        a message. Looking forward to hearing from you soon!
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
                    <NextImage width={600} height={400} src={Contact} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

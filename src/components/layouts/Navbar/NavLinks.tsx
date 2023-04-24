import { useTranslations } from "next-intl";

function NavItems() {
    const t = useTranslations("Navigation");

    return (
        <ul className="flex items-center justify-between font-semibold gap-2 sm:gap-4 text-primary-400">
            <li className="cursor-pointer hover:text-primary-100 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#about">{t("about")}</a>
            </li>
            <li className="cursor-pointer hover:text-primary-100 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#projects">{t("projects")}</a>
            </li>
            <li className="cursor-pointer hover:text-primary-100 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#contact">{t("contact")}</a>
            </li>
            <li>
                <a
                    className="rounded-full border-2 border-primary-100 px-3 py-1.5 transition hover:bg-primary-100 hover:text-primary-300 hover:shadow-primary-400"
                    href="/static/resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {t("resume")}
                </a>
            </li>
            {/* <li>
                <button className="rounded-full border-2 border-primary-100 p-0.5 transition hover:bg-primary-100 group hover:shadow-primary-400">
                    <svg
                        className="w-7 h-7 fill-white group-hover:fill-primary-300"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M256 48h-.5C140.8 48.3 48 141.3 48 256s92.8 207.7 207.5 208h.5c114.9 0 208-93.1 208-208S370.9 48 256 48zm8.3 124.5c22.1-.6 43.5-3.5 64.2-8.5 6.2 24.5 10.1 52.8 10.7 83.8h-74.9v-75.3zm0-16.7V66c22.4 6.2 45.2 36.1 59.6 82-19.2 4.6-39.1 7.2-59.6 7.8zm-16.6-90v90.1c-20.7-.6-40.8-3.3-60.1-8 14.6-46.2 37.5-76.3 60.1-82.1zm0 106.7v75.2h-75.4c.6-31 4.5-59.3 10.7-83.8 20.8 5 42.5 8 64.7 8.6zm-92.2 75.2H64.9c1.8-42.8 17.8-82 43.3-113 18.5 10.2 38.2 18.6 58.8 24.8-6.8 26.5-10.8 56.4-11.5 88.2zm0 16.6c.6 31.7 4.6 61.7 11.4 88.2-20.6 6.3-40.2 14.6-58.8 24.8-25.5-31-41.4-70.2-43.3-113h90.7zm16.8 0h75.4v75.1c-22.2.6-43.9 3.6-64.7 8.7-6.2-24.5-10.1-52.8-10.7-83.8zm75.4 91.8v90.2c-22.6-5.9-45.5-35.9-60.1-82.1 19.3-4.8 39.4-7.5 60.1-8.1zm16.6 89.9v-90c20.5.6 40.4 3.3 59.7 7.9-14.5 46-37.2 75.9-59.7 82.1zm0-106.6v-75.1h74.9c-.6 30.9-4.5 59.2-10.7 83.7-20.7-5-42.1-8-64.2-8.6zm91.6-75.1h91.2c-1.8 42.8-17.8 81.9-43.3 113-18.7-10.3-38.5-18.7-59.3-25 6.8-26.5 10.8-56.3 11.4-88zm0-16.6c-.6-31.7-4.6-61.6-11.3-88.1 20.8-6.3 40.6-14.7 59.2-24.9 25.5 31 41.5 70.2 43.3 113.1h-91.2zm36.5-125.8c-16.6 8.8-34 16.1-52.3 21.6-9.7-31.3-23.4-56.8-39.5-73.6 35.4 8.5 67 26.9 91.8 52zM210.8 70.1c-16.1 16.7-29.7 42.2-39.3 73.3-18.1-5.5-35.4-12.7-51.8-21.5 24.5-25 55.9-43.3 91.1-51.8zM119.6 390c16.4-8.8 33.8-16 51.8-21.5 9.7 31.2 23.3 56.6 39.4 73.4-35.2-8.5-66.6-26.8-91.2-51.9zm181 52.1c16.2-16.8 29.8-42.3 39.6-73.7 18.3 5.5 35.7 12.8 52.3 21.6-24.8 25.2-56.5 43.6-91.9 52.1z" />
                    </svg>
                </button>
            </li> */}
        </ul>
    );
}

export default NavItems;

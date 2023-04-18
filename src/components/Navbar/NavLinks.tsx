function NavItems() {
    return (
        <ul className="flex items-center justify-between font-semibold sm:gap-8">
            <li className="cursor-pointer hover:text-primary-200 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-primary-200 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-primary-200 hover:underline hover:decoration-2 hover:underline-offset-4">
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="Resume.pdf" rel="noopener noreferrer" target="_blank">
                    <button className="rounded-md border-2 border-primary-200 px-3 py-1 font-semibold text-primary-300 transition-all hover:bg-primary-200 hover:text-white">
                        Resume
                    </button>
                </a>
            </li>
        </ul>
    );
}

export default NavItems;

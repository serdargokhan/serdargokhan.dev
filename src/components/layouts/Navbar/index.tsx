"use client";

import { NextImage } from "@src/components/common";
import SiteLogo from "@public/images/common/site-logo.svg";
import NavLinks from "./NavLinks";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex h-16 items-center border-b-2 border-primary-100 bg-primary-300">
            <div className="container flex items-center justify-between">
                <a
                    className="rounded-full bg-primary-100 p-1 transition hover:shadow-primary-400"
                    href="#"
                    title=""
                >
                    <NextImage
                        width={28}
                        height={28}
                        src={SiteLogo}
                        priority
                        alt="Portfolio Home"
                    />
                </a>
                <NavLinks />
            </div>
        </nav>
    );
}

export default Navbar;

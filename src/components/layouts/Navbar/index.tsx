import Link from "next/link";
import SiteLogo from "public/images/common/site-logo.svg";
import NavLinks from "./NavLinks";
import { NextImage } from "../../common";

function Navbar() {
    return (
        <nav className="h-16 bg-primary-300 flex items-center sticky top-0 border-b-2 border-primary-100 z-50">
            <div className="container flex items-center justify-between">
                <Link
                    href="/"
                    className="bg-primary-100 p-1 rounded-full hover:shadow-primary-400 transition"
                >
                    <NextImage
                        width={28}
                        height={28}
                        src={SiteLogo}
                        alt=""
                        priority
                    />
                </Link>
                <NavLinks />
            </div>
        </nav>
    );
}

export default Navbar;

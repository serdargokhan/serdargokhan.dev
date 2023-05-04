import { NextImage } from "@src/components/common";
import SiteLogo from "@public/images/common/site-logo.svg";
import NavLinks from "./NavLinks";

function Navbar() {
    return (
        <nav className="h-16 bg-primary-300 flex items-center sticky top-0 border-b-2 border-primary-100 z-50">
            <div className="container flex items-center justify-between">
                <a
                    href="#"
                    className="bg-primary-100 p-1 rounded-full hover:shadow-primary-400 transition"
                >
                    <NextImage
                        width={28}
                        height={28}
                        src={SiteLogo}
                        priority
                        alt=""
                    />
                </a>
                <NavLinks />
            </div>
        </nav>
    );
}

export default Navbar;

import Link from "next/link";
import SiteLogo from "public/site-logo.svg";
import NavLinks from "./NavLinks";
import { NextImage } from "../common";

function Navbar() {
    return (
        <nav className="h-16 bg-primary-100">
            <div className="mx-auto w-11/12 max-w-7xl pt-6 sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="hidden sm:inline-block">
                    <NextImage
                        width={30}
                        height={30}
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

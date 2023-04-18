import LogoG from "public/Navbar/LogoG.svg";
import NavLinks from "./NavLinks";
import { NextImage } from "../common";

function Navbar() {
    return (
        <nav className="h-16 bg-primary-100">
            <div className="mx-auto w-11/12 max-w-7xl pt-6 sm:flex sm:items-center sm:justify-between">
                <div className="hidden transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer sm:flex">
                    <NextImage
                        width={30}
                        height={30}
                        src={LogoG}
                        alt=""
                        priority
                    />
                </div>
                <NavLinks />
            </div>
        </nav>
    );
}

export default Navbar;

import Image from "next/image";
// Assets
import LogoS from "public/Navbar/LogoS.svg";
import LogoG from "public/Navbar/LogoG.svg";
// Components
import NavItems from "./NavItems";

function Navbar() {
    return (
        <nav className="h-16 bg-primary-100">
            <div className="mx-auto w-11/12 max-w-7xl pt-6 sm:flex sm:items-center sm:justify-between">
                <div className="hidden transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer sm:flex">
                    <Image
                        src={LogoS}
                        width={30}
                        height={30}
                        alt="First Logo"
                        priority
                    />
                    <Image
                        src={LogoG}
                        width={30}
                        height={30}
                        alt="Second Logo"
                        priority
                    />
                </div>
                <NavItems />
            </div>
        </nav>
    );
}

export default Navbar;

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"
import Burger from "./Burger";

export default function SmNav() {

    return (
        <div className="flex justify-between my-[5vh] mx-10">
            {/* Logo */}
            <Link href="/">
                <Image
                    src={logo}
                    alt="Logo"
                    width={140}
                    height={35}
                />
            </Link>
            <Burger />

        </div>



    )
}

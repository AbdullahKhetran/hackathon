import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Logo.webp"
import Burger from "./Burger";

export default function SmNav() {

    return (
        <div className="flex justify-between m-8 my-[5vh]">
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

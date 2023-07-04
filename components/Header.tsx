
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"
// import BurgerOld from "./BurgerOld";
import Burger from "./Burger";
import Navbar from "./Navbar";

export default function Header() {

    return (
        <div className="flex justify-between my-[5vh] mx-5">
            {/* Logo */}
            <Link href="/">
                <Image
                    src={logo}
                    alt="Logo"
                    width={135}
                    height={23}
                />
            </Link>
            <Burger />

        </div>



    )
}

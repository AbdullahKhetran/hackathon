import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"


// This is Navbar for medium size screen onwards

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <Image
                src={logo}
                alt="Logo"
                width={135}
                height={23}
            />

            <Link href="/female">Female</Link>
            <Link href="/male">Male</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/products">All Products</Link>

        </div>
    )
}
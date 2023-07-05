import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"


// This is Navbar for screen larger than small size

export default function LgNav() {
    return (
        <div className="flex justify-between my-[5vh]">
            <Link href="/">
                <Image
                    src={logo}
                    alt="Logo"
                    width={140}
                    height={35}
                />
            </Link>

            <Link href="/female">Female</Link>
            <Link href="/male">Male</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/products">All Products</Link>

        </div>
    )
}
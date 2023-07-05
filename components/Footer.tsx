import Image from "next/image";
import logo from "@/public/logo.png"
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="border-4 border-red-700">
            {/* logo, detail, icons */}
            <div>
                {/* logo and details */}
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={140}
                        height={35}
                    />
                    <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                </div>
                {/* Icons */}
                <div className="flex">
                    <Twitter />
                    <Facebook />
                    <Linkedin />
                </div>
            </div>
            {/* Links */}
            <div>
                {/* Contact */}
                <div>
                    <h1>Company</h1>
                    <Link href="#">About</Link>
                    <Link href="#">Terms of Use</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">How it Works</Link>
                    <Link href="#">Contact Us</Link>
                </div>
                {/* Support */}
                <div>
                    <h1>Support</h1>
                    <Link href="#">Support Carrer</Link>
                    <Link href="#">24h Service</Link>
                    <Link href="#">Quick Chat</Link>
                </div>
                {/* Contact */}
                <div>
                    <h1>Contact</h1>
                    <Link href="#">Whatsapp</Link>
                    <Link href="#">Support 24h</Link>
                </div>
            </div>
        </div>
    )
}
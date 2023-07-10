import Image from "next/image";
import logo from "@/public/logo.png"
import { Facebook, Linkedin, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (

        // styling reamining: margins, size etc

        <div className="border-4 border-red-700 flex flex-col gap-8 my-8">
            {/* logo, detail, icons */}
            <div className="flex flex-col gap-8">
                <Image
                    src={logo}
                    alt="Logo"
                    width={240}
                    height={400}
                />
                <p className="text-xl text-gray-600 w-[60%]">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

                {/* style icons, bodies should be filled and size */}
                <div className="flex gap-2">
                    <Link href="#" className="bg-gray-100 p-2 rounded-lg">
                        <Twitter size={30} />
                    </Link>
                    <Link href="#" className="bg-gray-100 p-2 rounded-lg">
                        <Facebook size={30} />
                    </Link>
                    <Link href="#" className="bg-gray-100 p-2 rounded-lg">
                        <Linkedin size={30} />
                    </Link>

                </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6">
                {/* Contact */}
                <div className="flex flex-col text-neutral-500 text-xl gap-3">
                    {/* overriding text size in h1 */}
                    <h1 className="font-bold text-2xl mb-1">Company</h1>
                    <Link href="#" >About</Link>
                    <Link href="#">Terms of Use</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">How it Works</Link>
                    <Link href="#">Contact Us</Link>
                </div>
                {/* Support */}
                <div className="flex flex-col text-neutral-500 text-xl gap-3">
                    <h1 className="font-bold text-2xl mb-1">Support</h1>
                    <Link href="#">Support Carrer</Link>
                    <Link href="#">24h Service</Link>
                    <Link href="#">Quick Chat</Link>
                </div>
                {/* Contact */}
                <div className="flex flex-col text-neutral-500 text-xl gap-3">
                    <h1 className="font-bold text-2xl mb-1">Contact</h1>
                    <Link href="#">Whatsapp</Link>
                    <Link href="#">Support 24h</Link>
                </div>
            </div>
        </div>
    )
}
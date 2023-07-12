import Link from "next/link";
import Image from "next/image";
import product1 from "@/public/featured-product1.png"
import product2 from "@/public/featured-product2.webp"
import product3 from "@/public/featured-product3.webp"

export default function FeaturedProduct() {
    const headingStyle = "text-xl font-bold"
    return (
        <div className='border-4 border-cyan-700 flex flex-col items-center gap-4 my-24'>
            <h1 className="text-sm font-bold text-blue-600">PRODUCTS</h1>
            <h2 className="font-bold text-4xl text-center tracking-wider">Check What We Have</h2>

            <div className="flex flex-col gap-6 mt-4">

                {/* These are fetched from products section
                so remove this manual code and fetch it */}

                {/*This link leads to the page of that product so dynamic routing */}

                <Link href="/products" className="flex flex-col items-center gap-1 hover:scale-110 hover:transition-transform">
                    <Image
                        src={product1}
                        alt="Product image"
                    />
                    <h1 className={headingStyle}>Brushed Raglan Sweatshirt</h1>
                    <h2 className={headingStyle}>$195</h2>
                </Link>
                <Link href="/products" className="flex flex-col items-center gap-1 hover:scale-110 hover:transition-transform">
                    <Image
                        src={product2}
                        alt="Product image"
                        width={370}
                        height={394} />
                    <h1 className={headingStyle}>Cameryn Sash Tie Dresst</h1>
                    <h2 className={headingStyle}>$545</h2>
                </Link>
                <Link href="/products" className="flex flex-col items-center gap-1 hover:scale-110 hover:transition-transform">
                    <Image
                        src={product3}
                        alt="Product image"
                    />
                    <h1 className={headingStyle}>Flex Sweatshirt</h1>
                    <h2 className={headingStyle}>$175</h2>
                </Link>

            </div>
        </div>
    )
}
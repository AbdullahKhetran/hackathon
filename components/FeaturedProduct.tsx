import Link from "next/link";
import Image from "next/image";
import product1 from "@/public/featured-product1.png"
import product2 from "@/public/featured-product2.png"
import product3 from "@/public/featured-product3.png"

export default function FeaturedProduct() {
    return (
        <div>
            <h1>Products</h1>
            <h2>Check What We Have</h2>

            {/* <div className="flex"> */}
            <div >
                {/* These are fetched from products section
        so remove this maual code and fetch it */}

                {/*This link leads to the page of that product */}
                <Link href="/products" className="flex flex-col">
                    <Image
                        src={product1}
                        alt="" />
                    <h1>Brushed Raglan Sweatshirt</h1>
                    <h2>$195</h2>
                </Link>
                <Link href="/products" className="flex flex-col">
                    <Image
                        src={product2}
                        alt="" />
                    <h1>Cameryn Sash Tie Dresst</h1>
                    <h2>$545</h2>
                </Link>
                <Link href="/products" className="flex flex-col">
                    <Image
                        src={product3}
                        alt="" />
                    <h1>Flex Sweatshirt</h1>
                    <h2>$175</h2>
                </Link>

            </div>
        </div>
    )
}
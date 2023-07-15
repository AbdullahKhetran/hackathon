import product1 from "@/public/featured-product1.png"
import product2 from "@/public/featured-product2.webp"
import product3 from "@/public/featured-product3.webp"
import ProductCard from "./Product/ProductCard";


export default function FeaturedProduct() {
    const headingStyle = "text-xl font-bold"
    return (
        <div className='border-4 border-cyan-700 flex flex-col items-center gap-4 my-24'>
            <h1 className="text-sm font-bold text-blue-600">PRODUCTS</h1>
            <h2 className="font-bold text-4xl text-center tracking-wider">Check What We Have</h2>

            <div className="flex flex-col gap-6 mt-4">

                {/* These are fetched from products section
                so remove this manual code and fetch it */}

                {/* write a groq query for featured products */}

                {/*This link leads to the page of that product so dynamic routing */}
                <ProductCard img={product1} name="Brushed Raglan Sweatshirt" price={195} />
                <ProductCard img={product2} name="Cameryn Sash Tie Dress" price={525} />
                <ProductCard img={product3} name="Flex Sweatshirt" price={175} />

            </div>
        </div>
    )
}
import Navbar from "@/components/Navbar/Navbar";
import clientConfig from "@/sanity/config/client-config";
import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { displayProducts } from "@/components/utils";
import Copyright from "@/components/Footer/Copyright";


function getMaleProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "male"]{
            _id,
            name,            
            price,
            category,
            image,
            slug,
            details,
            care,
        }`
    )
}

// Image Url builder
const builder = imageUrlBuilder(clientConfig)

// source will be image
function urlFor(source: Object) {
    return builder.image(source)
}

export default async function Male() {
    const menProducts = await getMaleProducts()
    return (
        <div>
            <Navbar />
            {displayProducts(menProducts)}
            <Footer />
            <Copyright />
        </div>
    )
}
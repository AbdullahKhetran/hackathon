import Navbar from "@/components/Navbar/Navbar";
import clientConfig from "@/sanity/config/client-config";
import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { displayProducts } from "@/components/utils";
import Copyright from "@/components/Footer/Copyright";

function getKidsProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "kids"]{
          _id,
            name,
            gender,
            price,
            image,
            category,
        }`
    )
}


export default async function Kids() {
    const kidsProducts = await getKidsProducts()
    return (
        <div>
            <Navbar />
            {displayProducts(kidsProducts)}
            <Footer />
            <Copyright />
        </div>
    )
}
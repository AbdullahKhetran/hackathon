import clientConfig from "@/sanity/config/client-config"
import { createClient, groq } from "next-sanity"
import { Product } from "@/types/Product"
import { displayProducts } from "@/components/utils"
import Footer from "@/components/Footer/Footer"
import Copyright from "@/components/Footer/Copyright"
import Navbar from "@/components/Navbar/Navbar"


function getFemaleProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "female"]{
            _id,
            name,            
            price,
            category,
            image,
            slug,
            details,
            care,
            // Not needed but this is how you url can be shown, run in groq playground
            "imageUrl": image.asset->url
        }`
    )
}


export default async function Female() {
    const femaleProducts = await getFemaleProducts();

    return (
        <div className="">
            <Navbar />
            {displayProducts(femaleProducts)}
            <Footer />
            <Copyright />
        </div>
    )
}


import clientConfig from "@/sanity/config/client-config"
import { createClient, groq } from "next-sanity"
import { Product } from "@/types/Product"
import Navbar from "@/components/Navbar"
import { displayProducts } from "@/components/utils"
import Footer from "@/components/Footer"
import Copyright from "@/components/Copyright"

function getFemaleProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "female"]{
        _id,
        name,
        price,
        image,
        category,
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


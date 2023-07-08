import Navbar from "@/components/Navbar";
import clientConfig from "@/sanity/config/client-config";
import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import Footer from "@/components/Footer";


function getAllProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products"]{
            _id,
            name,
            gender,
            price,
            image,
            category,

        }`
    )
}

// Image Url builder
const builder = imageUrlBuilder(clientConfig)

// source will be image
function urlFor(source: Object) {
    return builder.image(source)
}

export default async function Products() {
    const products = await getAllProducts();

    return (
        <div>
            <Navbar />

            <div className="grid gap-8 
             xs:grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 xl:grid-cols-4
             mx-20 justify-around justify-items-center ">

                {products.map((product) => (
                    <div key={product._id}
                        className={`flex flex-col w-[250px]`}>
                        {/* set div width to image width so that "break-words" can be applied on text */}

                        {/* url builder used here */}
                        < Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={250}
                            height={270}
                        />
                        <h1 className="mt-1 text-xl font-semibold break-words tracking-wide">{product.name}</h1>
                        <h1 className="mt-1 text-lg font-bold opacity-60 break-words">
                            {product.category}
                        </h1>
                        <h2 className="mt-1 text-2xl font-semibold tracking-wide" >{product.price}</h2>

                    </div>
                ))}
            </div >
            <Footer />
        </div>
    )
}
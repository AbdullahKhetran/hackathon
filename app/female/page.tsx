import clientConfig from "@/sanity/config/client-config"
import { createClient, groq } from "next-sanity"
import { Product } from "@/types/Product"
import Image from "next/image"
import imageUrlBuilder from '@sanity/image-url'
import Header from "@/components/Header"

function getProducts(): Promise<Product[]> {
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

// Image Url builder
const builder = imageUrlBuilder(clientConfig)

// source will be image
function urlFor(source: Object) {
    return builder.image(source)
}

export default async function Female() {
    const products = await getProducts();

    return (
        <>
            <Header />
            <div className="flex flex-wrap">
                {products.map((product) => (
                    <div key={product._id}
                        className={`m-5 flex flex-col w-[${300}px] `}>
                        {/* set div width to image width so that "break-words" can be applied on text */}

                        {/* url builder used here */}
                        < Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={300}
                            height={300}
                        />

                        <h1 className="mt-1 text-xl font-semibold break-words tracking-wide">{product.name}</h1>

                        <h1 className="mt-1 text-lg font-bold opacity-60 break-words">
                            {product.category}
                        </h1>

                        <h2 className="mt-1 text-2xl font-semibold tracking-wide" >{product.price}</h2>

                    </div>
                ))
                }
            </div >
        </>
    )
}


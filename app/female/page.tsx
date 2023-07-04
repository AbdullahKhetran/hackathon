import clientConfig from "@/sanity/config/client-config"
import { createClient, groq } from "next-sanity"
import { Product } from "@/types/Product"
import Image from "next/image"
import imageUrlBuilder from '@sanity/image-url'

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
function urlFor(source) {
    return builder.image(source)
}

export default async function Female() {
    const products = await getProducts()
    return (
        <div className="flex flex-wrap">
            {products.map((product) => (
                <div key={product._id}
                    className="m-5 border border-red-800
                    flex flex-col                 
                    w-52 ">
                    {/* url builder will be used here */}
                    <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={200}
                        height={200}
                    />
                    {/* fix name from overflowing the width of image, check finished site */}
                    <h1 className="text-xl font-bold break-words">{product.name}</h1>

                    <h1 className="text-lg font-bold opacity-60 ">
                        {product.category}
                    </h1>

                    <h2 >{product.price}</h2>

                </div>
            ))}
        </div>
    )
}


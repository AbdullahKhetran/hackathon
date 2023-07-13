import Image from "next/image";
import { getAllProducts } from "../page";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import imageUrlBuilder from "@sanity/image-url"
import clientConfig from "@/sanity/config/client-config";

// Image Url builder
const builder = imageUrlBuilder(clientConfig)

// source will be image
function urlFor(source: Object) {
    return builder.image(source)
}



export default async function ProductPage({ params }: { params: { id: string } }) {
    const products = await getAllProducts()
    const matchingProduct = products.find((product) => (
        product.slug.current === params.id
    ))

    let url: string = ""

    if (matchingProduct !== undefined) {
        url = urlFor(matchingProduct.image).url()
    }

    return (
        <div className="mx-8">
            <Navbar />
            <div className="mb-24 border border-red-700">
                <div className="flex flex-col">
                    <div className="flex">
                        <div>
                            Images carousel
                        </div>
                        <div>
                            <Image
                                src={url}
                                alt={`${matchingProduct?.name} image`}
                                width={370}
                                height={394} />
                        </div>
                    </div>
                    <div className="max-w-[70%]">
                        <h1 className="text-3xl font-medium tracking-wider text-darkGray">{matchingProduct?.name}</h1>
                        <h2 className="text-xl font-semibold opacity-50">{matchingProduct?.category}</h2>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}
// product.slug.current === params.id

// function Page() {
//     type Product = {
//         name: string
//         _id: string
//         slug: {
//             current: string,
//             _type: string
//         }
//     }
//     const products: Product[]
//     const superId: string

//     return (

// )
// }
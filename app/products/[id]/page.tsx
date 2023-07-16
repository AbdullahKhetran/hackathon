import Image from "next/image";
import { getAllProducts } from "@/sanity/sanity-utils";
import Footer from "@/components/Footer/Footer";
import imageUrlBuilder from "@sanity/image-url"
import clientConfig from "@/sanity/config/client-config";
import { AddToCartButton } from "@/components/Buttons";
import Navbar from "@/components/Navbar/Navbar";
import Copyright from "@/components/Footer/Copyright";
import Size from "@/components/Product/Size";
import Quantity from "@/components/Product/Quantity";
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from "sanity";

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
    let details: PortableTextBlock[] = []
    let care: PortableTextBlock[] = []


    if (matchingProduct !== undefined) {
        url = urlFor(matchingProduct.image).url();
        details = matchingProduct.details
        care = matchingProduct.care
    }

    return (
        <div >
            <div className='max-w-center'>
                <Navbar />
                <div className="mb-24 p-8 bg-sectionSilver flex flex-col gap-8">
                    {/* Product Image and order */}
                    <div className="flex flex-col justify-between">
                        {/* Image */}
                        <div className="flex gap-8">
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

                        {/* Order */}
                        <div className="flex flex-col gap-10 max-w-[70%] mt-16">
                            <div className=" flex flex-col gap-1">
                                <h1 className="text-3xl tracking-wider text-darkGray">{matchingProduct?.name}</h1>
                                <h2 className="text-xl font-semibold opacity-50">{matchingProduct?.category}</h2>
                            </div>
                            <Size />
                            <Quantity />
                            <div className="flex my-4 gap-2">
                                <AddToCartButton content="Add to Cart" />
                                <h2 className="self-center text-3xl font-bold tracking-widest">{matchingProduct?.price}</h2>
                            </div>
                        </div>

                    </div>

                    {/* Product details and care */}
                    <div className="bg-white flex flex-col gap-8 p-8 mt-16">
                        <div className="flex border-b-2 border-[#c4c4c4] pb-8">
                            <div className="w-full h-full font-extrabold text-6xl opacity-10">Overview</div>
                            <h1 className="font-bold text-2xl absolute self-center tracking-wider">Product Information</h1>
                        </div>

                        <div className="flex flex-col gap-8 ">
                            <h2 className="text-productSubtitle font-bold tracking-wider text-xl">PRODUCT DETAILS</h2>
                            <div className="text-lg text-justify font-light tracking-wider text-darkGray">
                                <PortableText value={details} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h2 className="text-productSubtitle font-bold tracking-wider text-xl">PRODUCT CARE</h2>
                            <div className="prose text-lg">
                                {/* change bullet color to black */}
                                <PortableText value={care} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
            <div className='border border-t border-productSubtitle'></div>

            <div className='max-w-center'>
                <Copyright />
            </div>
        </div>
    )
}

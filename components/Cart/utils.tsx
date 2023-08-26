import { Cart } from "@/lib/drizzle";
import { getSpecificProduct } from "@/sanity/sanity-utils";
import { Image } from "sanity";
import { ShoppingCart } from "lucide-react";
import { MyProduct } from "@/types/products";



export function getIdsFromDb(items: Cart[]) {
    const productId: string[] = items.map((item) => item.productid);
    // console.log("ids from db", productId, "length", productId.length)
    return productId;

}


export async function getProductsFromSanity(ids: string[]) {
    const products: MyProduct[] = []

    const productPromises = ids.map(async (id) => {
        let product = await getSpecificProduct(id)
        // console.log("Product object is", product)
        return product
    })

    // Wait to resolve all promises and add them to the array using spread operator
    products.push(...await Promise.all(productPromises))

    return products

}



export function EmptyCart() {
    return (
        <div>
            <h1 className="font-bold text-xl">Shopping Cart</h1>
            <div className="flex flex-col items-center gap-4">
                <ShoppingCart size={140} />
                <h1 className="font-bold text-4xl tracking-wide">Your cart is empty</h1>
            </div>
        </div>
    )
}

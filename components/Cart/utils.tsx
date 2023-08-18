import { Cart } from "@/lib/drizzle";
import { getSpecificProduct } from "@/sanity/sanity-utils";


type MyProduct = {
    _id: string,
    name: string,
    price: number,
    category: string,
    image: any,
    slug: { current: string; _type: string; },
}

let productId: string[] = []
let products: MyProduct[] = []


export async function getIdsFromDb(items: Cart[]) {
    items.map((item) => (
        productId.push(item.productid)
    ))
    console.log(productId)
    return productId
}

export async function getProductsFromSanity(Ids: string[]) {

    for (let index = 0; index < Ids.length; index++) {

        let product = await getSpecificProduct(Ids[index])
        products.push(product)
    }
    // console.log(products)
    return products
}

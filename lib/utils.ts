
import { Product } from "@/types/sanity";
import { NewCart } from "./drizzle";

type Props = {
  // product: Product,
  product: NewCart,
  quantity: number,
  uid: string,
}


export async function handleAddToCart({ product, quantity, uid }: Props) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart`, {
    method: "POST",
    body: JSON.stringify({
      userid: uid,
      productid: product.productid,
      quantity: quantity,
      price: product.price,
      amount: quantity * product.price
    })
  })
  console.log(res)
  if (!res.ok) {
    throw new Error("Could not add to cart")
  }
}


// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

import { v4 as uuid } from "uuid";
import { cookies } from "next/headers"
import { Product } from "@/types/Product";

type Props = {
  matchingProduct: Product;
  quantity: number
}

export async function handleAddToCart({ matchingProduct, quantity }: Props) {
  // check whether cookie is present
  let uid = await cookies().get("userid")?.value

  // if undefined then set it
  if (uid === undefined) {
    cookies().set("userid", uuid())
  }

  // now get it back, in case it was undefined
  uid = await cookies().get("userid")?.value // this should be string


  const res = await fetch("api/cart", {
    method: "POST",
    body: JSON.stringify({
      user_id: uid,
      product_id: matchingProduct._id,
      quantity: quantity,
    })
  })

  if (!res.ok) {
    throw new Error("Could not add to cart")
  }
}


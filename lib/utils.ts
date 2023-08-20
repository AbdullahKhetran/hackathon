// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }


import { v4 as uuid } from "uuid";
import { cookies } from "next/headers"
import { Product } from "@/types/Product";
// import {  TempProps } from "@/types/Product";



type Props = {
  product: Product,
  quantity: number,
  uid: string,
}

// This is temp
// type Props2 = {
//   product: TempProps;
//   quantity: number,
//   uid: string
// }

export async function handleAddToCart({ product, quantity, uid }: Props) {

  const res = await fetch("api/cart", {
    method: "POST",
    body: JSON.stringify({
      user_id: uid,
      product_id: product._id,
      quantity: quantity,
    })
  })

  if (!res.ok) {
    throw new Error("Could not add to cart")
  }
}


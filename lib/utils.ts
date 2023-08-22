// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }



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

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart`, {
    method: "POST",
    body: JSON.stringify({
      userid: uid,
      productid: product._id,
      quantity: quantity,
    })
  })
  console.log(res)
  if (!res.ok) {
    throw new Error("Could not add to cart")
  }
}


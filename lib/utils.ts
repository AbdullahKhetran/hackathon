import { NewCart } from "./drizzle";

type Props = {
  product: NewCart,
  quantity: number,
  uid: string,
}


type DeleteProductProps = {
  uid: string,
  productId: string
}


export async function handleAddToCart({ product, quantity, uid }: Props) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`, {
    // const res = await fetch(`http://localhost:3000/api/cart`, {

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




export async function handleDeleteFromCart({ uid, productId }: DeleteProductProps) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart?userid=${uid}&productid=${productId}`, {
    // const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}&productid=${productId}`, {

    method: "DELETE",
  })

  console.log(res)

  if (!res.ok) {
    throw new Error("Could not remove product")
  }
}

export async function handleDeleteCart(uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart/delete?userid=${uid}`, {
    // const res = await fetch(`http://localhost:3000/api/cart/delete?userid=${uid}`, {

    method: "DELETE",
  })
  console.log(res)
  if (!res.ok) {
    throw new Error("Could not delete cart")
  }
}


export async function handleChange({ uid, product, quantity }: Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart/`, {
    // const res = await fetch(`http://localhost:3000/api/cart/`, {


    method: "PUT",
    body: JSON.stringify({
      // to validate
      userid: uid,
      productid: product.productid,
      // to update
      quantity: quantity,
      amount: quantity * product.price
    })
  })

  console.log(res)
  if (!res.ok) {
    throw new Error("Could not update product")
  }
}
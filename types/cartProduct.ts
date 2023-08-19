import { Image } from "sanity"

export interface CartProduct {
    _id: string,
    name: string,
    gender: string,
    category: string,
    // image: string,
    image: Image,
    price: number,
    totalPrice: number,
    quantity: number
}
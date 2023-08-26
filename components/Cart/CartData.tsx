"use client"
import { Cart } from "@/lib/drizzle";

export async function getData(uid: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart?userid=${uid}`)
    // const res = await fetch(`http://localhost:3000/api/cart?userid=${uid}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const dataPromises: Promise<Cart[]> = res.json();
    const data: Cart[] = await dataPromises;

    return data
}
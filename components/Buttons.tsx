import { ShoppingCart } from "lucide-react"
import Link from "next/link"


export default function Button({ content }: { content: string }) {
    return (
        <div>
            <Link href="/products">
                <button className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black">
                    {content}
                </button>
            </Link>
        </div>
    )
}

export function AddToCartButton() {
    return (
        <div >
            <button className="flex gap-2 bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black">
                <ShoppingCart />
                <h1>Add to Cart</h1>
            </button>
        </div>
    )
}
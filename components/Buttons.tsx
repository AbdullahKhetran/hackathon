import { ShoppingCart } from "lucide-react"
import Link from "next/link"

type ButtonParams = {
    content: string,
    path: string
    disabled?: boolean
}

export default function Button({ content, path, disabled = false }: ButtonParams) {
    return (
        <div>
            <Link href={path}>
                <button className="bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black" disabled={disabled}>
                    {content}
                </button>
            </Link>
        </div>
    )
}

export function AddToCartButton({ content }: { content: string }) {
    return (

        <button className="flex gap-2 justify-center md:w-2/5 bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black">
            <ShoppingCart />
            {content}
        </button>

    )
}
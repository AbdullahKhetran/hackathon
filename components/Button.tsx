import Link from "next/link"

export default function Button({ content }: { content: string }) {
    return (
        <div>
            <Link href="/products">
                <button className="bg-gray-800 text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black">
                    {content}
                </button>
            </Link>
        </div>
    )
}
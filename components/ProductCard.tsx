import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export default function ProductCard(props: { img: StaticImageData, name: string, price: number }) {
    return (
        <div>
            <Link href="/products" className="flex flex-col items-center gap-1 hover:scale-110 hover:transition-transform">
                <Image
                    src={props.img}
                    alt="Product image"
                    width={370}
                    height={394}
                />
                <h1 className="text-xl font-bold">{props.name}</h1>
                <h2 className="text-xl font-bold">${props.price}</h2>
            </Link>
        </div>
    )
}
"use client"
import { useAppSelector } from "@/redux/hooks"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export function LgNavCartIcon() {
    const userid = useAppSelector((state) => state.auth.uid)
    console.log(userid)

    return (
        <Link href={`/cart?userid=${userid}`} className="flex flex-col items-end px-1 py-[4px] bg-socialIconbg rounded-[50%]">
            <span className="bg-[#f02d34] rounded-[50%]  px-1 text-[#eee]  font-semibold  text-xs">0</span>
            {/* make the value dynamic */}
            <ShoppingCart size={20} />
        </Link>
    )
}
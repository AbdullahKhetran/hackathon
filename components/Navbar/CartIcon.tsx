import { ShoppingCart } from "lucide-react"


export default function CartIcon() {
    return (
        <button className="flex flex-col relative items-end py-2 px-4 bg-socialIconbg rounded-[50%]">
            <span className="bg-[#f02d34] rounded-[50%] w-6 h-6 text-[#eee] text-center font-semibold  ">0</span>
            {/* make the value dynamic */}

            <ShoppingCart size={32} />
        </button>
    )
}

export function LgNavCartIcon() {
    return (
        <button className="flex flex-col items-end px-2 py-1 bg-socialIconbg rounded-[60%]">
            <span className="bg-[#f02d34] rounded-[50%] p-0.5 px-1 text-[#eee]  font-semibold  text-sm">0</span>
            {/* make the value dynamic */}


            <ShoppingCart size={28} />
        </button>
    )
}
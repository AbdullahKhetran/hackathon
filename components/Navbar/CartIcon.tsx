import { ShoppingCart } from "lucide-react"
import Link from "next/link"


// export default function CartIcon() {
//     return (
//         <Link href={"/cart"} className="flex flex-col relative items-end py-2 px-4 bg-socialIconbg rounded-[50%]">
//             <span className="bg-[#f02d34] rounded-[50%] w-6 h-6 text-[#eee] text-center  font-semibold  ">0</span>
//             {/* make the value dynamic */}
//             <ShoppingCart size={32} />
//         </Link>
//     )
// }

export function LgNavCartIcon() {
    return (
        <Link href={"/cart"} className="flex flex-col items-end px-1 py-[4px] bg-socialIconbg rounded-[50%]">
            <span className="bg-[#f02d34] rounded-[50%]  px-1 text-[#eee]  font-semibold  text-xs">0</span>
            {/* make the value dynamic */}
            <ShoppingCart size={20} />
        </Link>
    )
}
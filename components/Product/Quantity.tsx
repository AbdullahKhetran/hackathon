import { Minus, Plus } from "lucide-react";

export default function Quantity() {
    return (
        <div className="flex gap-8 items-center">
            <h1 className="font-bold text-lg">Quantity:</h1>
            <div className='flex gap-3 items-center'>
                <div className='bg-[#f1f1f1] rounded-[50%] p-1'>
                    <Minus />
                </div>
                <h2>1</h2>
                <div className='border-2 border-black rounded-[50%] p-1'>
                    <Plus />
                </div>
            </div>
        </div>
    )
}
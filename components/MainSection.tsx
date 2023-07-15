import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import header from "@/public/header.webp"
import Image from 'next/image';


export default function MainSection() {
    return (

        <div className='flex mb-24 border-4 border-yellow-500'>


            <div className='flex flex-col gap-8  mb-24'>
                <span className='w-[120px] h-10 py-2 px-4 bg-blue-100 text-blue-700 font-semibold rounded-lg  '>
                    Sale 70%
                    {/* is ki jagah shadcn ka badge component bhi use kr skte ho, as hamzah did */}
                </span>

                <h1 className='text-5xl font-semibold tracking-wide'>An Industrial Take on Streetwear</h1>
                <p className='text-gray-500'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

                <Link
                    href="/products"
                    className="bg-gray-900 w-80 h-16 flex justify-center items-center text-white"
                >
                    <ShoppingCart />
                    <h2 className='font-bold ml-2'>Start Shopping</h2>
                </Link>

                {/* add logos through sanity */}
            </div>
            <div className='hidden lg:block  w-1/2 border-2 border-red-700'>
                <Image
                    src={header}
                    alt='Featured Image'
                />
                {/* make it responsive */}
            </div>
        </div>
    )
}
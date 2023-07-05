import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';


export default function MainSection() {
    return (
        <section className='border-4  border-red-700'>
            <span className='inline-block p-5 bg-blue-200 text-blue-700 font-bold rounded-lg'>
                Sale 70%
            </span>

            <h1 className='text-6xl font-bold my-5'>An Industrial Take on Streetwear</h1>
            <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>


            <Link
                href="/products"
                className="bg-gray-900 w-1/2 h-16 flex justify-center items-center text-white"

            >
                <ShoppingCart />
                <h2 className='font-bold ml-2'>Start Shopping</h2>
            </Link>



        </section>
    )
}
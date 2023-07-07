import Image from "next/image"
import event1 from "@/public/event1.webp"
import event2 from "@/public/event2.webp"
import event3 from "@/public/event3.webp"

export default function Promotions() {
    return (
        <div className='my-10 border-4  border-yellow-400'>
            <h1 className="text-blue-700">PROMOTIONS</h1>
            <h2 className="font-semibold text-3xl">Our Promotions Events</h2>

            <div>
                <div className="bg-gray-300 flex justify-between">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-medium text-3xl">GET UP TO <span className="font-bold text-4xl">60%</span></h1>
                        <p className="text-lg">For the summer season</p>
                    </div>
                    <Image
                        src={event1}
                        alt="Promotion"
                    />
                </div>
                <div className="bg-zinc-800 text-white p-12 flex flex-col justify-center items-center">
                    <h1 className="font-extrabold text-4xl">GET 30% OFF</h1>
                    <p className="text-sm">USE PROMO CODE</p>
                    <button className="bg-stone-700 font-bold text-lg">DINEWEEKENDSALE</button>
                </div>
            </div>
            <div>
                <div className="bg-orange-200">
                    {/* fetch these details from sanity */}
                    <h1>Flex Sweatshirt</h1>
                    <span>$100</span> <span>$75</span>
                    <Image
                        src={event2}
                        alt="T Shirt on discount"
                    // add width and height
                    />
                </div>
                <div className="bg-gray-300">
                    {/* fetch these details from sanity */}
                    <h1>Flex Push Button Bomber</h1>
                    <span>$225</span> <span>$190</span>
                    <Image
                        src={event3}
                        alt="Jacket on discount"
                    // add width and height
                    />
                </div>
            </div>
        </div>
    )
}
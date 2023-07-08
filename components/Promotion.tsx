import Image from "next/image"
import event1 from "@/public/event1.webp"
import event2 from "@/public/event2.webp"
import event3 from "@/public/event3.webp"

export default function Promotions() {
    return (
        <div className='my-10 '>

            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-sm font-bold text-blue-600">PROMOTIONS</h1>
                <h2 className="font-semibold text-3xl">Our Promotions Events</h2>
            </div>

            <div className=" mt-4 grid gap-4 ">
                <div className=" grid gap-y-4 ">
                    <div className="bg-gray-300 flex justify-around px-4">
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
                        {/* give spacing in h1 */}
                        <h1 className="font-extrabold text-4xl mb-2">GET 30% OFF</h1>
                        <p className="text-sm">USE PROMO CODE</p>
                        <button className="bg-stone-600 font-bold text-lg p-2 rounded-lg">DINEWEEKENDSALE</button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className=" flex flex-col bg-orange-200">
                        <div >
                            {/* fetch these details from sanity */}
                            <h1>Flex Sweatshirt</h1>
                            <span className="text-lg line-through ">$100</span> <span className="font-bold text-xl">$75</span>
                        </div>
                        <Image
                            src={event2}
                            alt="T Shirt on discount"
                            className="self-center"
                        // add width and height
                        />
                    </div>

                    <div className="flex flex-col bg-gray-300 ">
                        {/* fetch these details from sanity */}
                        <div>
                            <h1>Flex Push Button Bomber</h1>
                            <span className=" text-lg line-through">$225</span> <span className="font-bold text-xl">$190</span>
                        </div>
                        <Image
                            src={event3}
                            alt="Jacket on discount"
                            className=" self-center"
                        // add width and height
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
import Image from "next/image"
import event1 from "@/public/event1.webp"
import event2 from "@/public/event2.webp"
import event3 from "@/public/event3.webp"

export default function Promotions() {
    return (
        <div className='border-4  border-yellow-400'>
            <h1>PROMOTIONS</h1>
            <h2>Our Promotions Events</h2>

            <div className="bg-gray-300">
                <div>
                    <h1>GET UP TO 60%</h1>
                    <p>For the summer season</p>
                </div>
                <Image
                    src={event1}
                    alt="Promotion"
                />
            </div>
            <div className="bg-zinc-950 text-white">
                <h1>GET 30% OFF</h1>
                <p>USE PROMO CODE</p>
                <button className="bg-stone-700">DINEWEEKENDSALE</button>
            </div>
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
    )
}
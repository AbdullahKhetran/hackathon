import event1 from "@/public/event1.webp"
import Image from "next/image"

export default function Promotions() {
    return (
        <div>
            <h1>PROMOTIONS</h1>
            <h2>Our Promotions Events</h2>

            <div>
                <div></div>
                <Image
                    src={event1}
                    alt="Promotion"
                >

                </Image>
            </div>
        </div>
    )
}
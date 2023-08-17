import Footer from "@/components/Footer/Footer"
import Copyright from "@/components/Footer/Copyright"
import Navbar from "@/components/Navbar/Navbar"
import { DisplayProducts } from "@/components/Cart/ProductCard"
import { CartPage } from "@/components/Cart/CartData"


export default function Home() {
    return (
        <div>
            <Navbar />

            {/* Page content */}
            <CartPage />

            <Footer />
            <Copyright />

        </div>
    )
}

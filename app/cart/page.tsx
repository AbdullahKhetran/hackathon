import Footer from "@/components/Footer/Footer"
import Copyright from "@/components/Footer/Copyright"
import Navbar from "@/components/Navbar/Navbar"
import CartData from "@/components/CartData"


export default function Home() {
    return (
        <div>
            <Navbar />
            {/* Page content */}
            <CartData />
            <Footer />
            <Copyright />

        </div>
    )
}

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { displayProducts } from "@/components/utils";
import Copyright from "@/components/Footer/Copyright";
import { getKidsProducts } from "@/sanity/sanity-utils";


export default async function Kids() {
    const kidsProducts = await getKidsProducts()
    return (
        <div>
            <Navbar />
            {displayProducts(kidsProducts)}
            <Footer />
            <Copyright />
        </div>
    )
}
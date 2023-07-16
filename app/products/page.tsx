import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { getAllProducts } from "@/sanity/sanity-utils";
import { displayProducts } from "@/components/utils";

export default async function Products() {
    const products = await getAllProducts();
    return (
        <div>
            <Navbar />

            {displayProducts(products)}

            <Footer />
        </div>
    )
}
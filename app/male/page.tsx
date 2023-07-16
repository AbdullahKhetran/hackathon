import Navbar from "@/components/Navbar/Navbar";
import clientConfig from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url"
import Footer from "@/components/Footer/Footer";
import { displayProducts } from "@/components/utils";
import Copyright from "@/components/Footer/Copyright";
import { getMaleProducts } from "@/sanity/sanity-utils";

export default async function Male() {
    const menProducts = await getMaleProducts()
    return (
        <div>
            <Navbar />
            {displayProducts(menProducts)}
            <Footer />
            <Copyright />
        </div>
    )
}
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { displayProducts } from "@/components/utils";
import Copyright from "@/components/Footer/Copyright";
import { getKidsProducts } from "@/sanity/sanity-utils";


export default async function Kids() {
    const kidsProducts = await getKidsProducts()
    return (
        <div>
            <div className='max-w-center'>
                <Navbar />
                {displayProducts(kidsProducts)}
                <Footer />
            </div>
            <div className='border border-t border-productSubtitle'></div>

            <div className='max-w-center'>
                <Copyright />

            </div>
        </div>
    )
}
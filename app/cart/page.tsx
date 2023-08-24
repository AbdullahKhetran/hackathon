"use client"
import Footer from "@/components/Footer/Footer"
import Copyright from "@/components/Footer/Copyright"
import Navbar from "@/components/Navbar/Navbar"
import { Cart } from "@/lib/drizzle";
import { useAppSelector } from "@/redux/hooks";
import { Displayer } from "@/components/Cart/ProductCard";
import { EmptyCart, getIdsFromDb, getProductsFromSanity } from "@/components/Cart/utils";
import { MyProduct } from "@/components/Cart/utils";
import { getSpecificProduct } from "@/sanity/sanity-utils";
import { getData } from "@/components/Cart/CartData"
import { useEffect, useState } from "react"


export default function Home() {

    const [sanityProducts, setSanityProducts] = useState<MyProduct[]>([]);

    const userid = useAppSelector((state) => state.auth.uid);

    async function Master(data: Cart[]) {
        try {
            const ids = getIdsFromDb(data);
            // console.log("CP: Products ids are", ids);

            const products = await getProductsFromSanity(ids);
            // console.log("CP: Products from sanity", products);

            setSanityProducts(products);
        } catch (error) {
            console.error("Error processing data", error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const uid = userid;
                const fetchedData = await getData(uid);
                Master(fetchedData); // Call Master with the fetched data
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
    }, [userid]);

    return (
        <div>
            <Navbar />

            {/* Page content */}

            <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">
                <PageContent products={sanityProducts} />
            </div>

            <Footer />
            <Copyright />
        </div>
    )
}


function PageContent({ products }: { products: MyProduct[] }) {
    return products.length === 0 ? <EmptyCart /> : <Displayer products={products} />
}


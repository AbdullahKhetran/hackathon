"use client"
import Footer from "@/components/Footer/Footer"
import Copyright from "@/components/Footer/Copyright"
import Navbar from "@/components/Navbar/Navbar"
import { Cart } from "@/lib/drizzle";
import { useAppSelector } from "@/redux/hooks";
import { Displayer } from "@/components/Cart/ProductsCard";
import { EmptyCart, getIdsFromDb, getProductsFromSanity } from "@/components/Cart/utils";
import { getData } from "@/components/Cart/CartData"
import { useEffect, useState } from "react"
import { MyProduct } from "@/types/products";

export default function Home() {

    const [sanityProducts, setSanityProducts] = useState<MyProduct[]>([]);
    const [dataFetched, setDataFetched] = useState(false)
    const [dbData, setDbData] = useState<Cart[]>([])

    const userid = useAppSelector((state) => state.auth.uid);

    async function master(data: Cart[]) {
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
                setDataFetched(true)
                setDbData(fetchedData)
                master(fetchedData); // call master with the fetched data
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
    }, [userid]); // added userid to dependecy array to satisfy eslint

    return (
        <div>
            <Navbar />

            {/* Page content */}

            <div className=" my-18 mx-8 md:mx-16 xl:mx-32 px-4 ">
                {dataFetched
                    ? <PageContent dbData={dbData} products={sanityProducts} />
                    : <LoadingComponent />
                }
            </div>

            <Footer />
            <Copyright />
        </div>
    )
}

type Props = {
    dbData: Cart[],
    products: MyProduct[]
}

function PageContent({ dbData, products }: Props) {
    return products.length === 0
        ? <EmptyCart />
        : <Displayer dbData={dbData} products={products} />
}

function LoadingComponent() {
    return (
        <div>Fetching Data ...</div>
    )
}

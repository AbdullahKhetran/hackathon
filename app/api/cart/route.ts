import { cartTable, db, Cart, NewCart } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cookies } from 'next/headers'
import { eq } from "drizzle-orm";



export async function GET(request: NextRequest) {
    // find the user id and then show only his products
    const params = request.nextUrl.searchParams

    try {

        // for specific user
        if (params.has("userid")) {
            const uid = params.get("userid") as string;
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, uid))

            // console.log(uid)
            // console.log(NextResponse.json({ data: res }))

            return NextResponse.json("Successful")

        } else {
            cookies().set("userid", uuid())
            return NextResponse.json("Cart is empty")
        }


    } catch (error) {
        // console.log(error)
        return NextResponse.json("Something went wrong")
    }
}

export async function POST(request: NextRequest) {

    const req: NewCart = await request.json();

    try {
        if (req.productid && req.quantity) {

            let uid = cookies().get("userid")?.value

            if (!uid) {
                cookies().set("userid", uuid())

            }

            uid = cookies().get("userid")?.value as string

            const res = await db.insert(cartTable).values({
                userid: uid,
                productid: req.productid,
                quantity: req.quantity
            }).returning()

        } else {
            throw new Error("Product id and quantity is required")
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json("Post request didnt go as expected")
    }
}
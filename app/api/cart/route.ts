import { cartTable, db, Cart, NewCart } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cookies } from 'next/headers'
import { eq } from "drizzle-orm";



export async function GET(request: NextRequest) {

    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")
    // user id was inserted from cookie

    console.log("User id in params is " + paramUserId)

    try {

        if (paramUserId) {
            const uid = paramUserId as string;
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, uid))

            return NextResponse.json(res)
        } else {
            const userId = uuid()
            cookies().set("userid", userId)
            return NextResponse.json({ message: "Cart is empty" })
        }

    }

    catch (error) {
        // console.log(error)
        if (error instanceof Error) {
            return NextResponse.json({ message: "Something went wrong", err: error.message }, {
                status: 500,
            })
        } else {
            console.log(error)
            return NextResponse.json("There is an error, check console")
        }
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
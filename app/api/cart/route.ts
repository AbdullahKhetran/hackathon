import { cartTable, db, Cart, NewCart } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cookies } from 'next/headers'
import { eq } from "drizzle-orm";



export async function GET(request: NextRequest) {

    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")
    // user id was inserted from cookie

    // console.log("User id in params is " + paramUserId)

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
        if (req.productid && req.quantity && req.userid) {

            const res = await db.insert(cartTable).values({
                userid: req.userid,
                productid: req.productid,
                quantity: req.quantity
            }).returning()

            return NextResponse.json(
                { message: "Data added successfully" },
                { status: 200 }
            )

        } else {
            return NextResponse.json(
                { message: "User Id, Product Id and Quantity is required" },
                { status: 400 }
            )
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { err: error },
            { status: 500 }
        )
    }
}
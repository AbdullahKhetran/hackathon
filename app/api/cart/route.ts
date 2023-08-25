import { cartTable, db, Cart, NewCart } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";



export async function GET(request: NextRequest) {

    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")

    // console.log("User id in params is " + paramUserId)

    try {
        if (paramUserId) {

            const uid = paramUserId as string;
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, uid))

            return NextResponse.json(res)
        } else {
            return NextResponse.json({ message: "Cart is Empty" })
        }
    }

    catch (error) {
        return NextResponse.json(
            { message: "Something went wrong", err: error },
            { status: 500, }
        )
    }
}

export async function POST(request: NextRequest) {

    const req: NewCart = await request.json();

    try {
        if (req) {

            const res = await db.insert(cartTable).values({
                userid: req.userid,
                productid: req.productid,
                quantity: req.quantity,
                price: req.price,
                amount: req.amount
            }).returning()

            return NextResponse.json(
                { message: "Data added successfully", res },
                { status: 200 }
            )

        } else {
            return NextResponse.json(
                { message: "Data could not be inserted" },
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
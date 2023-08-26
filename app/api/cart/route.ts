import { cartTable, db, NewCart } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq, and } from "drizzle-orm";


export async function GET(request: NextRequest) {

    const origin = request.headers.get('origin')

    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")

    // console.log("User id in params is " + paramUserId)

    try {
        if (paramUserId) {


            const uid = paramUserId as string;
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, uid))

            return NextResponse.json(
                { response: res }, {
                headers: {
                    'Access-Control-Allow-Origin': origin || "https://hackathon-git-development-abdullahkhetran.vercel.app/",
                    'Content-Type': 'application/json',
                }
            })
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
            if (req) {

                const res = await db.insert(cartTable).values({
                    userid: req.userid,
                    productid: req.productid,
                    quantity: req.quantity,
                    price: req.price,
                    amount: req.amount,
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
        }
    } catch (error) {
        console.log("POST request error", error)
        return NextResponse.json(
            { err: error },
            { status: 500 }
        )
    }
}



export async function PUT(request: NextRequest) {

    const req: NewCart = await request.json();

    try {
        if (req.productid && req.userid) {

            const res = await db.update(cartTable)
                .set({ quantity: req.quantity, amount: req.amount })
                .where(and(eq(cartTable.userid, req.userid), eq(cartTable.productid, req.productid)))
                .returning()

            return NextResponse.json(
                { message: "Product updated sucessfully" },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { message: "Product could not be updated" },
                { status: 400 }
            )
        }

    } catch (error) {
        console.log("PUT request error", error)
        return NextResponse.json(
            { err: error },
            { status: 500 }
        )
    }

}


export async function DELETE(request: NextRequest) {

    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")
    const paramProductId = params.get("productid")

    try {
        if (paramUserId && paramUserId) {

            const uid = paramUserId as string;
            const productId = paramProductId as string

            const res = await db.delete(cartTable)
                .where(and(eq(cartTable.userid, uid), eq(cartTable.productid, productId)))
                .returning()

            return NextResponse.json(
                { message: "Product removed sucessfully" },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { message: "Product could not be removed" },
                { status: 400 }
            )
        }
    } catch (error) {
        console.log("DELETE request error", error)
        return NextResponse.json(
            { err: error },
            { status: 500 }
        )
    }

}
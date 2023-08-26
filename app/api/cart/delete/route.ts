import { cartTable, db, NewCart } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function DELETE(request: NextRequest) {

    const params = request.nextUrl.searchParams
    const paramUserId = params.get("userid")


    try {
        if (paramUserId) {

            const uid = paramUserId as string;

            const res = await db.delete(cartTable)
                .where(eq(cartTable.userid, uid))
                .returning()

            return NextResponse.json(
                { message: "Products removed sucessfully" },
                {
                    headers: {
                        'Access-Control-Allow-Origin': 'https://hackathon-git-development-abdullahkhetran.vercel.app/',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                }
            )
        } else {
            return NextResponse.json(
                { message: "Products could not be removed" },
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
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
                { status: 200 }
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
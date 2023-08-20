'use server'

import { cookies } from "next/headers"
import { v4 as uuid } from "uuid";


export async function auth() {
    // check whether cookie is present
    let uid = await cookies().get("userid")?.value
    // console.log("first get cookies user id", uid)

    // if undefined then set it
    if (uid === undefined) {
        await cookies().set("userid", uuid())
    }

    // now get it back, in case it was undefined
    uid = await cookies().get("userid")?.value // this should be string
    // console.log("second get cookies user id", uid)

    return uid as string
}
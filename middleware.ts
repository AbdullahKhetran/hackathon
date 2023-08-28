// import { NextResponse } from "next/server"

// const allowedOrigins = process.env.NODE_ENV === 'production'
//     // maybe try with both with and without www
//     ? [`${process.env.NEXT_PUBLIC_URL}`, `${process.env.NEXT_PUBLIC_PREVIEW_URL}`, `${process.env.SECRET_URL}`]
//     : ['http://localhost:3000', `${process.env.NEXT_PUBLIC_URL}`, `${process.env.NEXT_PUBLIC_PREVIEW_URL}`]

// export function middleware(request: Request) {

//     const origin = request.headers.get('origin')
//     console.log(origin)

//     if (origin && !allowedOrigins.includes(origin)) {
//         return new NextResponse(null, {
//             status: 400,
//             statusText: "Bad Request",
//             headers: {
//                 'Content-Type': 'text/plain'
//             }
//         })
//     }

//     console.log('Middleware!')

//     console.log(request.method)
//     console.log(request.url)

//     return NextResponse.next()
// }

// export const config = {
//     matcher: '/api/:path*',
// }
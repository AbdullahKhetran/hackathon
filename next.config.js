/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',

            },
        ],
    },
    // async headers() {
    //     return [
    //         {
    //             source: "/app/api/cart",
    //             headers: [
    //                 {key:}
    //             ]
    //         }
    //     ]
    // },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig

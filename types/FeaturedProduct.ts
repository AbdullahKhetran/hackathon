export type FeaturedProduct = {
    _id: string,
    createdAt: Date,
    image: string,
    title: string,
    price: number,
    slug: {
        current: string,
        _type: string
    },
}
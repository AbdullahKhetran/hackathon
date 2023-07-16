export type FeaturedProduct = {
    _id: string,
    createdAt: Date,
    image: string,
    title: string,
    price: string,
    slug: {
        current: string,
        _type: string
    },
}
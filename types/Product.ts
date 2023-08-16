import { PortableTextBlock } from "sanity";

export type Product = {
    _id: string,
    _createdAt: Date,
    name: string,
    gender: string,
    category: string,
    image: string,
    slug: {
        current: string,
        _type: string
    },
    price: number,
    details: PortableTextBlock[],
    care: PortableTextBlock[],

}
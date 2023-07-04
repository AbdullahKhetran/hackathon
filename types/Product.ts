import { PortableTextBlock } from "sanity";

export type Product = {
    _id: string,
    _createdAt: Date,
    name: string,
    gender: string,
    category: string,
    image: string,
    slug: string,
    price: string,
    details: PortableTextBlock[],
    care: PortableTextBlock[],

}
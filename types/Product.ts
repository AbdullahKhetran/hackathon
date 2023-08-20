import { Image, PortableTextBlock } from "sanity";

export type Product = {
    _id: string,
    _createdAt: Date,
    name: string,
    gender: string,
    category: string,
    // image: string,
    image: Image,
    slug: {
        current: string,
        _type: string
    },
    price: number,
    details: PortableTextBlock[],
    care: PortableTextBlock[],

}

// export type TempProps = {
//     _id: string,
//     name: string,
//     category: string,
//     price: number
// }
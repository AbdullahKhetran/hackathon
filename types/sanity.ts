import { Image, PortableTextBlock } from "sanity";


export type Brand = {
    _id: string,
    _createdAt: Date,
    name: string,
    logo: string,
    slug: string,
}


export type Product = {
    _id: string,
    _createdAt: Date,
    name: string,
    gender: string,
    category: string,
    // image: string,
    image: Image,
    images: Image[],
    slug: {
        current: string,
        _type: string
    },
    price: number,
    details: PortableTextBlock[],
    care: PortableTextBlock[],

}

// export type FeaturedProduct = {
//     _id: string,
//     createdAt: Date,
//     image: string,
//     title: string,
//     price: number,
//     slug: {
//         current: string,
//         _type: string
//     },
// }

// export type Image = {
//     Id: string,
//     _createdAt: Date,
//     title: string,
//     image: string,
//     slug: string,
// }

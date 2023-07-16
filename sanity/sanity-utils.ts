import { Product } from "@/types/Product"
import clientConfig from "@/sanity/config/client-config"
import { createClient, groq } from "next-sanity";
import { Brand } from "@/types/Brands";


export function getAllProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products"]{
            _id,
            name,
            gender,
            price,
            category,
            image,
            slug,
            details,
            care,
        }`
    )
}

export function getFemaleProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "female"]{
            _id,
            name,            
            price,
            category,
            image,
            slug,
            details,
            care,
            // Not needed but this is how you url can be shown, run in groq playground
            "imageUrl": image.asset->url
        }`
    )
}

export function getMaleProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "male"]{
            _id,
            name,            
            price,
            category,
            image,
            slug,
            details,
            care,
        }`
    )
}

export function getKidsProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "kids"]{
          _id,
            name,
            gender,
            price,
            image,
            category,
        }`
    )
}

export function getBrandLogos(): Promise<Brand[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "brands"] {
            _id,
            name,
            logo,
            slug
        }`
    )
}

export function getFeaturedProducts(): Promise<Product[]> {
    // going to get first 4 female products
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && gender == "female"][0..3]{
              _id,
                name,            
                price,
                image,
                slug,
        }`
    )
}

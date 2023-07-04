const featuredProduct = {
    name: "featuredProducts",
    title: "Featured Products",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: "true"
            },
            fields: [{
                name: "alt",
                title: "Alt",
                type: "string",
            }
            ]
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {

            name: "slug",
            title: "Slug",
            type: "string",
            options: {
                source: "title"
            }

        }
    ]
}

export default featuredProduct
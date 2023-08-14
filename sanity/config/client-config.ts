require("dotenv").config
const clientConfig = {
    projectId: process.env.SANITY_PROJECT_ID as string,
    dataset: process.env.SANITY_DATASET as string,
    apiVersion: "2023-07-04",
    useCdn: false,
}

export default clientConfig
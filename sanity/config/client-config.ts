require("dotenv").config
const clientConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: "2023-07-04",
    useCdn: false,
}

export default clientConfig
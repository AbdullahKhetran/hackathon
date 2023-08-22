require("dotenv").config
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import { visionTool } from '@sanity/vision'

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: process.env.SANITY_PROJECT_ID as string,
    dataset: process.env.SANITY_DATASET as string,
    title: "Hackathon site",
    apiVersion: "2023-07-04",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
})

export default config
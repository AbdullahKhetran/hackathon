import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import { visionTool } from '@sanity/vision'

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "qffp0dty",
    dataset: "production",
    title: "Hackathon site",
    apiVersion: "2023-07-04",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
})

export default config
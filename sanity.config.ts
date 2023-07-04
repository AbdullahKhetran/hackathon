import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "qffp0dty",
    dataset: "production",
    title: "Hackathon site",
    apiVersion: "2023-07-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config
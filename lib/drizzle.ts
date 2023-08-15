import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { InferModel } from 'drizzle-orm';
// import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
// import { z } from 'zod';


export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    userid: varchar("user_id", { length: 255 }).notNull(),
    productid: varchar("product_id", { length: 255 }).notNull(),
    quantity: integer("quantity").notNull()
})

// Types
export type Cart = InferModel<typeof cartTable>
export type NewCart = InferModel<typeof cartTable, "insert">

// Connection
export const db = drizzle(sql)

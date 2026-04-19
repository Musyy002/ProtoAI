import { date, datetime, } from "drizzle-orm/mysql-core";
import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  credits: integer("credits").default(5) 
});

export const ProjectTable = pgTable('project', {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    projectId: varchar("projectId", { length: 255 }).notNull(),
    userInput: varchar("userInput", { length: 255 }),
    device: varchar("device", { length: 255 }),
    // Comma lagaya hai taaki agla field sahi se define ho sake
    createdOn: varchar("createdOn").default(new Date().toISOString()), 
    // Yahan column ka naam "config" pass kiya hai
    config: json("config") 
});
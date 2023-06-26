import { Pool } from "pg";

export const db = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "7090",
    database: "nodejsdb"
})
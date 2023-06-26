import { db } from "./db";

const query = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE, password VARCHAR(50), name VARCHAR(50), surename VARCHAR(50))`


db.query(query, (err, result) => {
    if( err && err instanceof Error ) {
        console.log("Error: ", err.message);
        return
    }

    console.log("CREATED TABLE", result.command);
})
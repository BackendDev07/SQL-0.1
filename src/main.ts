import express from "express";
import cors from "cors"
import { db } from "./database/db"

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


console.log(db);



// Server route http://localhost:3000

app.listen(3000, () => {
    console.log("Server is running");
})
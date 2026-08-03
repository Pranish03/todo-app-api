import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/db.js";

connectDatabase();

//import Routes
//import authroutes from "../src/routes/authRoutes.js"





//Api routes




const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

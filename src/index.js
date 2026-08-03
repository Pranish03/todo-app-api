import "dotenv/config";
import express from "express";

//import Routes
import authroutes from "../src/routes/authroutes.js"
import todoroutes from "../src/routes/todoroutes.js"


config();

//Api routes

app.use("/auth",authroutes);


const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

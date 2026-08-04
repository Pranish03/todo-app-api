import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/db.js";
import routes from "./routes/api.js";

connectDatabase();

//import Routes
//import authroutes from "../src/routes/authRoutes.js"



//Api routes

const app = express();

app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

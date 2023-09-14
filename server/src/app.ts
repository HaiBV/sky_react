import dotenv from "dotenv";
dotenv.config();
if (!process.env.IS_TS_NODE) {
  require("module-alias/register");
}
import { ValidateEnv } from "./utils/validateEnv";
ValidateEnv();

import express, { Express } from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./database";
import routers from "./routes";

const app: Express = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routers);
app.set("port", process.env.PORT || "3030");

app.listen();

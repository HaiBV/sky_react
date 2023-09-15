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
import { ErrorMiddleware } from "./middlewares/error.middleware";

const app: Express = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routers);

app.use(ErrorMiddleware);

const PORT = process.env.PORT || "3030";
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`======= ENV: ${process.env.NODE_ENV} =======`);
  console.log(`🚀 App listening on the port ${PORT}`);
  console.log(`=================================`);
});

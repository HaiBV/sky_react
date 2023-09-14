import dotenv from "dotenv";
dotenv.config();
if (!process.env.IS_TS_NODE) {
  require("module-alias/register");
}
import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import http from "http";
import routers from "./routes";
import { connectDB } from "./database/connectDB";

const app: Express = express();

connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routers);

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT ?? "3030");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("listening", onListening);
server.on("error", onError);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

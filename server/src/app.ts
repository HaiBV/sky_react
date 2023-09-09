import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import routers from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 5050;
app.set("port", port);

app.use('/', routers);

const server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);
server.on("error", onError);

function onListening() {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}

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

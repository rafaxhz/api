import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import database from "./database/prisma.js";
import router from "./routes.js";

await database.$connect();

const server = express();

server.use(express.json());

server.use(router);

server.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(error.cause as number).json({
      status: "Erro",
      message: error.message,
    });
  }
);

server.listen(3333, () => console.log("Listening on port 3333 🚀"));

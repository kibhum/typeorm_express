import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import { app } from "./app";
import { AppDataSource } from "./db";

const port = process.env.PORT || 3000;

const start = async () => {
  if (!process.env.SERVER) {
    throw new Error("SERVER must be defined!");
  }
  if (!process.env.DATABASE) {
    throw new Error("DATABASE must be defined!");
  }
  if (!process.env.DB_USER) {
    throw new Error("USER must be defined!");
  }
  if (!process.env.DB_PASSWORD) {
    throw new Error("PASSWORD must be defined!");
  }
  const dbInit = await AppDataSource.initialize();
  if (dbInit.isInitialized) {
    console.log(`Mssql Connected`);
  } else {
    console.log(`Failed to connect to db`);
  }
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

start();

import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import bodyParser from "body-parser";
import cors from "cors";

import { Task } from "./src/entities/task.entity";
import { taskRouter } from "./src/tasks/routes/task.router";

const app: Express = express();
dotenv.config();

// Parsing the request body
app.use(bodyParser.json());
// Cors
app.use(cors());
// DB Initialization
export const AppDataSource = new DataSource({
  type: "mssql" as const,
  host: "localhost",
  port: 1433,
  username: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DB,
  dropSchema: false,
  entities: [Task],
  logging: false,
  synchronize: true,
  extra: {
    options: {
      encrypt: false,
    },
  },
});

const PORT = process.env.PORT;

app.use("/", taskRouter);
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Express server listening on port", PORT);
    });
    console.log("DataSource initialized");
  })
  .catch((err) => {
    console.log("Error during datasource initialization", err);
  });

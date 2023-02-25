import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { taskRouter } from "./tasks/routes/task.router";

const app: Express = express();
// Parsing the request body
app.use(bodyParser.json());
// Cors
app.use(cors());

app.use("/", taskRouter);

export { app };

import fs from "fs";
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";

import { taskRouter } from "./tasks/routes/task.router";

const app: Express = express();
const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Parsing the request body
app.use(bodyParser.json());
// Cors
app.use(cors());

app.use("/", taskRouter);

export { app };

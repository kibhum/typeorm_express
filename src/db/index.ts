import { DataSource } from "typeorm";

// Entities
import { Task } from "../entities/task.entity";

// DB Initialization
export const AppDataSource = new DataSource({
  type: "mssql" as const,
  host: process.env.SERVER,
  port: 1433,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
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

// AppDataSource.initialize()
//   .then(() => {
//     console.log("DataSource initialized");
//   })
//   .catch((err) => {
//     console.log("Error during datasource initialization", err);
//   });

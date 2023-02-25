import express from "express";
import { getAllTasks } from "../controllers/task.controller";
// import { TaskController } from "../controllers/task.controller";

export const taskRouter = express.Router();

// taskRouter.get("/tasks", async (req: Request, res: Response) => {
//   try {
//     const taskController = new TaskController();
//     const allTasks = await taskController.getAllTasks();
//     res.json(allTasks);
//   } catch (error) {
//     console.error(error);
//     throw new Error(`Error fetching tasks:${error}`);
//   }
// });
// const taskController = new TaskController();
taskRouter.get("/tasks", getAllTasks);

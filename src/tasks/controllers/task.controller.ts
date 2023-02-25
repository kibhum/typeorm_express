import { Request, Response, NextFunction } from "express";
import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../db";
import { Task } from "../../entities/task.entity";

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskRepo = AppDataSource.getRepository(Task);
  let allTasks: Task[];
  try {
    allTasks = await taskRepo.find({ order: { date: "ASC" } });

    //   Convert all tasks to an array of objects
    allTasks = instanceToPlain(allTasks) as Task[];
    res.json(allTasks);
  } catch (err) {
    console.error(err);
    throw new Error(`Error fetching tasks:${err}`);
  }
};

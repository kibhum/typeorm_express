import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    type: "text",
  })
  title: string;
  @Column({
    type: "varchar",
  })
  date: string;
  @Column({
    type: "varchar",
  })
  description: string;
  @Column({
    type: "varchar",
    default: Priority.normal,
  })
  priority: Priority;
  @Column({
    type: "varchar",
    default: Status.todo,
  })
  status: Status;
}

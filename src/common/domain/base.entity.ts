import { Entity } from "typeorm";

@Entity()
export class BaseEntity {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;
}
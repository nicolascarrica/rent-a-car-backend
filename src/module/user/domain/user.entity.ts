import { BaseEntity } from "src/common/domain/base.entity";

export class User extends BaseEntity {
  public name: string;
  public lastName: string;
  public docType: string;
  public docNumber: string;
  public nationality: string;
  public address: string;
  public phone: string;
  public email: string;
  public birthDate: Date;
}

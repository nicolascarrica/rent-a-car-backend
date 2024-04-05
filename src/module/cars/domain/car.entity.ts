import { BaseEntity } from "src/common/domain/base.entity";
import { Reservation } from "src/module/reservations/domain/reservation.entity";

export class Car extends BaseEntity {
  public brand: string;
  public model: string;
  public color: string;
  public kms: number;
  public year: number;
  public img: string;
  public price: number;
  public transmission: string;
  public airConditioning: boolean;
  public reservations: Reservation[];
  public deleteAt: Date;
}
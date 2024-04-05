import { BaseEntity } from "src/common/domain/base.entity";
import { Car } from "src/module/cars/domain/car.entity";
import { User } from "src/module/user/domain/user.entity";

export class Reservation extends BaseEntity {
  startDate: Date;
  endDate: Date;
  pricePerDay: number;
  totalPrice: number;
  paymentMethod: string;
  statusId: boolean;
  car: Car;
  user: User;
}
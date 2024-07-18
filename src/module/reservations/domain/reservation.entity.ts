import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "src/module/cars/domain/car.entity";
import { User } from "src/module/user/domain/user.entity";

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  pricePerDay: number;

  @Column()
  totalDays: number;

  @Column()
  totalPrice: number;

  @Column()
  paymentMethod: string;

  @Column()
  statusId: boolean;

  @ManyToOne(() => Car, car => car.reservations)
  car: Car;

  @ManyToOne(() => User, user => user.reservations)
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  calculateTotals() {
    if (this.startDate && this.endDate && this.pricePerDay) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      this.totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      this.totalPrice = this.totalDays * this.pricePerDay;
    }
  }
}
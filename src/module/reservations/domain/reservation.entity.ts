import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Car } from 'src/module/cars/domain/car.entity';
import { User } from 'src/module/user/domain/user.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  pricePerDay: number;

  @Column()
  paymentMethod: string;

  @Column()
  statusId: string;

  @ManyToOne(() => Car, car => car.reservations)
  car: Car;

  @ManyToOne(() => User, user => user.reservations)
  user: User;

  @Column()
  totalDays: number;

  @Column()
  totalPrice: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  calculateTotals() {
    if (this.startDate && this.endDate && this.pricePerDay) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        if (start > end) {
            throw new Error('La fecha de inicio no puede ser mayor que la fecha de fin.');
        }
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.totalDays = totalDays;
        this.pricePerDay = this.car.price;
        this.totalPrice = this.totalDays * this.pricePerDay;
    }
}
}



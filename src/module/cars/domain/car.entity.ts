
import { BaseEntity } from "src/common/domain/base.entity";
import { Reservation } from "src/module/reservations/domain/reservation.entity";
import { Entity, Column, OneToMany } from "typeorm";

@Entity()
export class Car extends BaseEntity {
  @Column()
  public brand: string;

  @Column()
  public model: string;

  @Column()
  public color: string;

  @Column()
  public kms: number;

  @Column()
  public year: number;

  @Column()
  public img: string;

  @Column()
  public price: number;

  @Column()
  public transmission: string;

  @Column()
  public airConditioning: boolean;

  @OneToMany(() => Reservation, reservation => reservation.car)
  public reservations: Reservation[];

  @Column({ nullable: true })
  public deleteAt: Date;
}

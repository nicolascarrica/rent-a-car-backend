
import { BaseEntity } from "src/common/domain/base.entity";
import { Reservation } from "src/module/reservations/domain/reservation.entity";
import { Entity, Column, OneToMany } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public lastName: string;

  @Column()
  public email: string;

  @Column()
  public phone: string;

  @Column()
  public docType: string;

  @Column()
  public docNumber: string;

  @Column()
  public nationality: string;

  @Column()
  public address: string;

  @Column()
  public birthDate: Date;

  @OneToMany(() => Reservation, reservation => reservation.user)
  public reservations: Reservation[];

  @Column({ nullable: true })
  public createdAt: Date;

  @Column({ nullable: true })
  public updatedAt: Date;
}

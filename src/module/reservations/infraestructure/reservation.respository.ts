import { Injectable, NotFoundException } from "@nestjs/common";
import { IReservationRepository } from "../application/reservation.repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { ReservationSchema } from "./reservation.schema";
import { Repository } from "typeorm";
import { Reservation } from "../domain/reservation.entity";

@Injectable()
export class ReservationRepository implements IReservationRepository{
  constructor(
    @InjectRepository(ReservationSchema)
    private readonly repository: Repository<Reservation>
  ){}

  async findAll(): Promise<Reservation[]> {
    return this.repository.createQueryBuilder('reservation')
      .leftJoinAndSelect('reservation.car', 'car')
      .leftJoinAndSelect('reservation.user', 'user')
      .getMany();
  }

  async findById(id: number): Promise<Reservation> {
    return this.repository.createQueryBuilder('reservation')
      .leftJoinAndSelect('reservation.car', 'car')
      .leftJoinAndSelect('reservation.user', 'user')
      .where('reservation.id = :id', { id })
      .getOne();
  }

  
  // async findAll(): Promise<Reservation[]> {
  //   const reservations = await this.repository.find();
  //   return reservations;
  // }

  // async findById(id: number): Promise<Reservation> {
  //   const reservation = await this.repository.findOne({
  //     where: {
  //       id
  //     }
  //   });

  //   if(!reservation) throw new NotFoundException(`Reservation with id ${id} not found`);
  //   return reservation;
  // }

  async create(newReservation: Reservation): Promise<Reservation> {
    return await this.repository.save(newReservation);
  }

  async update(id: number, fieldsToUpdate: Partial<Reservation>): Promise<Reservation> {
    const partialReservation = {
      id,
      ...fieldsToUpdate
    }

    const reservation = await this.repository.preload(partialReservation);

    if(!reservation) throw new NotFoundException(`Reservation with id ${id} not found`);

    return await this.repository.save(reservation);
  }

  async delete(id: number): Promise<Reservation> {
    const reservation = await this.repository.findOne({
      where: {
        id
      }
    });

    if(!reservation) throw new NotFoundException(`Reservation with id ${id} not found`);

    return await this.repository.remove(reservation);
  }
}
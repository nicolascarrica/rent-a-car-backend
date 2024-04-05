import { Injectable } from "@nestjs/common";
import { ReservationRepository } from "../infraestructure/reservation.respository";
import { Reservation } from "../domain/reservation.entity";
import { CreateReservationDto, UpdateReservationDto } from "../interface/reservation.dto";
import { mapRequestToEntityReservation } from "../interface/reservation.mapper";

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async findAll(): Promise<Reservation[]> {
    const reservations = await this.reservationRepository.findAll();
    return reservations
  }

  async findById(id: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findById(id);
    return reservation
  }

  async create(createReservationDTO: CreateReservationDto): Promise<Reservation> {
    const reservation = mapRequestToEntityReservation(createReservationDTO);
    const newReservation = await this.reservationRepository.create(reservation);
    return newReservation
  }

  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    const updatedReservation = await this.reservationRepository.update(id, updateReservationDto);
    return updatedReservation
  }

  async delete(id: number): Promise<Reservation> {
    const deletedReservation = await this.reservationRepository.delete(id);
    return deletedReservation
  }

}
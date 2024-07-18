import { Injectable, NotFoundException } from "@nestjs/common";
import { ReservationRepository } from "../infraestructure/reservation.respository";
import { Reservation } from "../domain/reservation.entity";
import { CreateReservationDto, UpdateReservationDto } from "../interface/reservation.dto";
import { CarRepository } from "src/module/cars/infraestructure/car.repository";
import { UserRepository } from "src/module/user/infraestructure/user.repository";
import { ReservationMapper } from "../interface/reservation.mapper";
;

@Injectable()
export class ReservationService {
  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly carRepository: CarRepository,
    private readonly userRepository: UserRepository,
    private readonly reservationMapper: ReservationMapper
  ) {}

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.findAll();
  }

  async findById(id: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findById(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  async create(createReservationDTO: CreateReservationDto): Promise<Reservation> {
    const car = await this.carRepository.findById(createReservationDTO.carId);
    const user = await this.userRepository.findById(createReservationDTO.userId);
    const reservation = this.reservationMapper.mapCreateDtoToEntity(createReservationDTO, car, user);
    return this.reservationRepository.create(reservation);
  }

  async update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    const car = await this.carRepository.findById(updateReservationDto.carId);
    const user = await this.userRepository.findById(updateReservationDto.userId);

    if (!car || !user) {
      throw new NotFoundException(`Car or User not found`);
    }

    const reservation = await this.reservationRepository.findById(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }

    const updatedReservation = this.reservationMapper.mapUpdateDtoToEntity(updateReservationDto, car, user, reservation);
    return this.reservationRepository.update(id, updatedReservation);
  }
 
  async delete(id: number): Promise<void> {
    const reservation = await this.reservationRepository.findById(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    await this.reservationRepository.delete(reservation.id);
  }
}

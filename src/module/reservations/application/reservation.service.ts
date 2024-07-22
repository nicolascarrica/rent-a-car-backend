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
    const reservation = await this.reservationRepository.findById(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }

    if (updateReservationDto.carId) {
      const car = await this.carRepository.findById(updateReservationDto.carId);
      if (!car) {
        throw new NotFoundException(`Car with ID ${updateReservationDto.carId} not found`);
      }
      reservation.car = car;
    }

    if (updateReservationDto.userId) {
      const user = await this.userRepository.findById(updateReservationDto.userId);
      if (!user) {
        throw new NotFoundException(`User with ID ${updateReservationDto.userId} not found`);
      }
      reservation.user = user;
    }

    // Update only the fields that are present in the DTO
    Object.assign(reservation, updateReservationDto);
    return this.reservationRepository.update(id, reservation);
  }

 
  async delete(id: number): Promise<void> {
    const reservation = await this.reservationRepository.findById(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    await this.reservationRepository.delete(reservation.id);
  }
}

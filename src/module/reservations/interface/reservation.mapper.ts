import { CreateReservationDto, UpdateReservationDto } from "../interface/reservation.dto";
import { Reservation } from "../domain/reservation.entity";
import { Car } from "../../cars/domain/car.entity";
import { User } from "src/module/user/domain/user.entity";

export class ReservationMapper {
  mapCreateDtoToEntity(dto: CreateReservationDto, car: Car, user: User): Reservation {
    const reservation = new Reservation();
    reservation.startDate = dto.startDate;
    reservation.endDate = dto.endDate;
    reservation.pricePerDay = car.price;
    reservation.paymentMethod = dto.paymentMethod;
    reservation.statusId = dto.statusId;
    reservation.totalDays = this.calculateTotalDays(dto.startDate, dto.endDate);
    reservation.totalPrice = reservation.totalDays * car.price;
    reservation.car = car;
    reservation.user = user;
    return reservation;
  }

  mapUpdateDtoToEntity(dto: UpdateReservationDto, car: Car, user: User, existingReservation: Reservation): Reservation {
    existingReservation.startDate = dto.startDate;
    existingReservation.endDate = dto.endDate;
    existingReservation.pricePerDay = car.price;
    existingReservation.paymentMethod = dto.paymentMethod;
    existingReservation.statusId = dto.statusId;
    existingReservation.totalDays = this.calculateTotalDays(dto.startDate, dto.endDate);
    existingReservation.totalPrice = existingReservation.totalDays * car.price;
    existingReservation.car = car;
    existingReservation.user = user;
    return existingReservation;
  }

  private calculateTotalDays(startDate: Date, endDate: Date): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

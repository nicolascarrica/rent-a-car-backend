import { Reservation } from "../domain/reservation.entity"
import { CreateReservationDto } from "./reservation.dto"

export function mapRequestToEntityReservation(request: CreateReservationDto): Reservation {
  const reservation = new Reservation();

  reservation.startDate = request.startDate;
  reservation.endDate = request.endDate;
  reservation.pricePerDay = request.pricePerDay;
  reservation.totalPrice = request.totalPrice;
  reservation.paymentMethod = request.paymentMethod;
  reservation.statusId = request.statusId;
  reservation.car = request.car;
  reservation.user = request.user;

  return reservation;
}
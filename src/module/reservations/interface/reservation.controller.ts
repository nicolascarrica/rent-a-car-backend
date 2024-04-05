import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ReservationService } from "../application/reservation.service";
import { Reservation } from "../domain/reservation.entity";
import { CreateReservationDto } from "./reservation.dto";

@Controller("reservations")
export class ReservationController {
  constructor(private readonly service: ReservationService) {}

  @Get()
  async getReservations(): Promise <Reservation[]> {
    const reservations: Reservation[] = await this.service.findAll();
    return reservations
  }

  @Get(":id")
  async getReservationById(
    @Param("id")
    id: number
  ): Promise<Reservation> {
    const reservation: Reservation = await this.service.findById(id);
    return reservation
  }

  @Post()
  createReservation(
    @Body()
    reservationDto: CreateReservationDto
  ){
    const newReservation = this.service.create(reservationDto);
    return newReservation
  }

  @Patch(":id")
  updateReservation(
    @Param("id")
    id: number,
    @Body() updateReservationDto: CreateReservationDto
  ) {
    const updatedReservation = this.service.update(id, updateReservationDto);
    return updatedReservation
  }

  @Delete(":id")
  deleteReservation(
    @Param("id")
    id: number
  ){
    const deletedReservation = this.service.delete(id);
    return deletedReservation
  }

}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReservationService } from "./application/reservation.service";; // Corrige el nombre del archivo aquí
import { ReservationController } from "./interface/reservation.controller";
import { ReservationSchema } from "./infraestructure/reservation.schema";
import { CarModule } from "../cars/car.module";
import { UserModule } from "../user/user.module";
import { ReservationMapper } from "./interface/reservation.mapper"; // Corregido si estaba mal
import { ReservationRepository } from "./infraestructure/reservation.respository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservationSchema]),
    CarModule,
    UserModule,
  ],
  controllers: [ReservationController],
  providers: [ReservationService, ReservationRepository, ReservationMapper],
})
export class ReservationModule {}
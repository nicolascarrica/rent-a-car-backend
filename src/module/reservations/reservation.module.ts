import { Module } from "@nestjs/common";
import { ReservationService } from "./application/reservation.service";
import { ReservationRepository } from "./infraestructure/reservation.respository";
import { ReservationController } from "./interface/reservation.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReservationSchema } from "./infraestructure/reservation.schema";

@Module({
    imports: [TypeOrmModule.forFeature([ReservationSchema])],
    controllers: [ReservationController],
    providers: [ReservationService, ReservationRepository],
})

export class ReservationModule {}
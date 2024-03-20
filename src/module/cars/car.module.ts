import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarSchema } from "./infraestructure/car.schema";
import { CarController } from "./interface/car.controller";
import { CarService } from "./application/car.service";
import { CarRepository } from "./infraestructure/car.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CarSchema])],
  controllers: [CarController],
  providers: [CarService, CarRepository],
})

export class CarModule { }
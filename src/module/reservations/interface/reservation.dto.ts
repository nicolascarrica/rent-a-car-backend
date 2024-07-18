import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Car } from "src/module/cars/domain/car.entity";
import { User } from "src/module/user/domain/user.entity";

export class CreateReservationDto {
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;

  @IsNotEmpty()
  @Type(() => Number)
  pricePerDay: number;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  statusId: boolean;

  @IsNotEmpty()
  @Type(() => Number)
  carId: number;

  @IsNotEmpty()
  @Type(() => Number)
  userId: number;
}

export class UpdateReservationDto extends PartialType(CreateReservationDto) {}

import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateReservationDto {
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;

  // @IsNotEmpty()
  // @Type(() => Number)
  // pricePerDay: number;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsString()
  statusId: string;

  @IsNotEmpty()
  @Type(() => Number)
  carId: number;

  @IsNotEmpty()
  @Type(() => Number)
  userId: number;
}

export class UpdateReservationDto extends PartialType(CreateReservationDto) {}

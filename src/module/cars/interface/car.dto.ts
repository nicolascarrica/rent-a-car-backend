import { IntersectionType, PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  color: string;

  @IsNumber()
  @Type(() => Number)
  kms: number;

  @IsNumber()
  @Type(() => Number)
  year: number;

  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsString()
  transmission: string;

  @IsBoolean()
  @Type(() => Boolean)
  airConditioning: boolean;
}

class CarAdditionalInfo {
  img: string;
}

export class UpdateCarDto extends IntersectionType(PartialType(CreateCarDto), CarAdditionalInfo) {}


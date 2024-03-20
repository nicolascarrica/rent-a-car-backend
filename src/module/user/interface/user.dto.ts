import { IsAlpha, IsDateString, IsNotEmpty, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDto {
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  docType: string;

  @IsString()
  @IsNotEmpty()
  docNumber: string;

  @IsString()
  nationality: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsDateString()
  birthDate: Date;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
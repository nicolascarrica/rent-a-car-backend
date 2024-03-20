import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CarService } from "../application/car.service";
import { Car } from "../domain/car.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerConfig } from "src/config/multer.config";
import { CreateCarDto, UpdateCarDto } from "./car.dto";
import { mapRequestToEntity } from "./car.mapper";

@Controller('cars')
export class CarController {
  constructor(private readonly service: CarService) {}

  @Get()
  async getCars (): Promise<Car[]> {
    const cars: Car[] = await this.service.findAll();
    return cars
  }

  @Get(':id')
  async getCarById (
    @Param('id') 
    id: number
  ): Promise<Car> {
    const car: Car = await this.service.findById(id);
    return car
  }

  // @Post()
  // @UseInterceptors(FileInterceptor('img', multerConfig))
  // createCar (
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() createCarDto: CreateCarDto
  // ): Car {
  //   const path = file.path.split('uploads\\')[1]
  //   const newCar: Car = mapRequestToEntity(createCarDto, path);
  //   return newCar
  // }
  @Post()
  @UseInterceptors(FileInterceptor('img', multerConfig))
  createCar (
    @UploadedFile() file: Express.Multer.File,
    @Body() createCarDto: CreateCarDto
  ): Promise<Car> {
    let path: string = '';

    if (file && file.path) {
      path = file.path.split('uploads\\')[1];
    }

    const newCar: Car = mapRequestToEntity(createCarDto, path);
    return this.service.create(newCar)
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('img', multerConfig))
  updateCar (
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCarDto: UpdateCarDto
  ):Promise<Car> {
    let path: string = '';

    if (file) {
      path = file.path.split('uploads\\')[1]
    } else {
      path = updateCarDto.img
    }
    const updateCar: Car = mapRequestToEntity(updateCarDto, path)
    return this.service.update(id, updateCar)

  }

  @Delete(':id')
  deleteCar (@Param('id') id: number): Promise<Car> {
    return this.service.delete(id)
  }
  

}
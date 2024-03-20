import { Injectable } from "@nestjs/common";
import { Car } from "../domain/car.entity";
import { CarRepository } from "../infraestructure/car.repository";
import { CreateCarDto, UpdateCarDto } from "../interface/car.dto";

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async findAll(): Promise<Car[]> {
    const cars = await this.carRepository.findAll();
    return cars
  }

  async findById(id: number): Promise<Car> {
    const car = await this.carRepository.findById(id);
    return car
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = new Car();
    Object.assign(car, createCarDto);
    const newCar = await this.carRepository.create(car);
    return newCar
  }

  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    const updatedCar = await this.carRepository.update(id, updateCarDto);
    return updatedCar
  }

  async delete(id: number): Promise<Car> {
    const deletedCar = await this.carRepository.delete(id);
    return deletedCar
  }
}
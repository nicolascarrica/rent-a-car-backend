import { Injectable, NotFoundException } from "@nestjs/common";
import { ICarRepository } from "../application/car.repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { CarSchema } from "./car.schema";
import { Car } from "../domain/car.entity";
import { Repository } from "typeorm";
import { plainToClass } from "class-transformer";

@Injectable()
export class CarRepository implements ICarRepository {
  constructor(
    @InjectRepository(CarSchema)
    private readonly repository: Repository<Car>
  ) {}

  async findAll(): Promise<Car[]> {
    const cars: Car[] = await this.repository.find();
    return cars.map((car) => plainToClass(Car, car));
  }

  async findById(id: number): Promise<Car> {
    const car: Car = await this.repository.findOne({
      where: {
        id
      }
    });

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return plainToClass(Car, car);
  }

  async create (car: Car): Promise<Car> {
    const newCar = await this.repository.save(car);
    return newCar
  }

  async update(id: number, fieldsToUpdate: Partial<Car>): Promise<Car> {
    const updateCar ={
      id,
      ...fieldsToUpdate,
    };

    const car: Car = await this.repository.preload(updateCar);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return await this.repository.save(car);
  }

  async delete(id: number): Promise<Car> {
    const car: Car = await this.repository.findOne({
      where: {
        id
      }
    });

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return await this.repository.remove(car);
  }
}
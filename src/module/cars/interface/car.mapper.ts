import { Car } from "../domain/car.entity";
import { CreateCarDto, UpdateCarDto } from "./car.dto";

export function mapRequestToEntity(request: CreateCarDto | UpdateCarDto, imgPath: string) : Car {
    const car = new Car();
    car.brand = request.brand;
    car.model = request.model;
    car.color = request.color;
    car.kms = request.kms;
    car.year = request.year;
    car.price = request.price;
    car.transmission = request.transmission;
    car.airConditioning = request.airConditioning;
    car.img = imgPath;

    return car;
}
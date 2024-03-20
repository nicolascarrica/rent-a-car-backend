import { BaseSchema } from "src/common/infraestructure/baseSchema";
import { Car } from "../domain/car.entity";

export const CarSchema = new BaseSchema<Car>({
  name: 'Car',
  target: Car,
  tableName: 'cars',
  columns: {
    brand: {
      type: String,
      name: 'brand'
    },
    model: {
      type: String,
      name: 'model'
    },
    color: {
      type: String,
      name: 'color'
    },
    kms: {
      type: Number,
      name: 'kms'
    },
    year: {
      type: Number,
      name: 'year'
    },
    img: {
      type: String,
      name: 'img'
    },
    price: {
      type: Number,
      name: 'price'
    },
    transmission: {
      type: String,
      name: 'transmission'
    },
    airConditioning: {
      type: Boolean,
      name: 'air_conditioning'
    },
    deleteAt: {
      type: Date,
      name: 'delete_at',
      deleteDate: true,
    },
  },
})
import { BaseSchema } from "src/common/infraestructure/baseSchema";
import { Reservation } from "../domain/reservation.entity";
import { Car } from "src/module/cars/domain/car.entity";
import { User } from "src/module/user/domain/user.entity";

export const ReservationSchema = new BaseSchema<Reservation>({
  name: 'Reservation',
  target: Reservation,
  tableName: 'reservations',
  columns: {
    startDate: {
      type: Date,
      name: 'start_date'
    },
    endDate: {
      type: Date,
      name: 'end_date'
    },
    pricePerDay: {
      type: Number,
      name: 'price_per_day'
    },
    totalPrice: {
      type: Number,
      name: 'total_price'
    },
    paymentMethod: {
       type: String,
       name: 'payment_method'
    },
    statusId: {
      type: Boolean,
      name: 'status'
    },
  },
  relations: {
    car: {
      type: 'many-to-one',
      target: () => Car,
      inverseSide: 'reservations',
      joinColumn: {
        name: 'car_id'
      },
    },
    user: {
      type: 'many-to-one',
      target: () => User,
      inverseSide: 'reservations',
      joinColumn: {
        name: 'user_id'
      },
    },
  },
});

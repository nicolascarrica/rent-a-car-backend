import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BaseSchema } from 'src/common/infraestructure/baseSchema';
import { CarSchema } from 'src/module/cars/infraestructure/car.schema';
import { ReservationSchema } from 'src/module/reservations/infraestructure/reservation.schema';
import { UserSchema } from 'src/module/user/infraestructure/user.schema';


export const typeormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './data/database.db',
  entities: [BaseSchema, UserSchema, CarSchema, ReservationSchema],
  synchronize: true,
};
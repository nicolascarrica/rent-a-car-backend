import { Module } from "@nestjs/common";
import { UserModule } from "./module/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/ormConfig";
import { CarModule } from "./module/cars/car.module";
import { ReservationModule } from "./module/reservations/reservation.module";

@Module({
  imports: [
    UserModule,
    CarModule,
    ReservationModule,
    TypeOrmModule.forRoot(typeormConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

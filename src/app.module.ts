import { Module } from "@nestjs/common";
import { UserModule } from "./module/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/ormConfig";
import { CarModule } from "./module/cars/car.module";

@Module({
  imports: [
    UserModule,
    CarModule,
    TypeOrmModule.forRoot(typeormConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Module } from "@nestjs/common";
import { UserModule } from "./module/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/ormConfig";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeormConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

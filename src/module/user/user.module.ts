import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from "./infraestructure/user.schema";
import { UserController } from "./interface/user.controller";
import { UserService } from "./application/user.service";
import { UserRepository } from "./infraestructure/user.repository";

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository]
})
export class UserModule {}

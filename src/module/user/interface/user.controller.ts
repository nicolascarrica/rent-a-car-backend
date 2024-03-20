import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "../application/user.service";
import { User } from "../domain/user.entity";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { mapRequestToEntity } from "./user.mapper";

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
    async findAllUsers(): Promise<User[]> {
    const users: User[] = await this.service.findAllUsers();

    return users;
  };

  @Get(':userId')
  findUserById(
    @Param('userId') userId: number
  ): Promise<User> {
    const user = this.service.findUserById(userId);
    return user
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto): Promise<User> {
    const newUser = mapRequestToEntity(userDto);
    return this.service.createUser(newUser);
  }

  @Patch(':userId')
  updateUser(
    @Param('userId') userId: number,
    @Body() updateFields: UpdateUserDto
  ): Promise<User> {
    return this.service.updateUser(userId, updateFields);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: number): Promise<User> {
    return this.service.deleteUser(userId);
  }
};

  

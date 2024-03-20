import { Injectable } from "@nestjs/common";
import { UserRepository } from "../infraestructure/user.repository";
import { User } from "../domain/user.entity";
import { CreateUserDto, UpdateUserDto } from "../interface/user.dto";
import { mapRequestToEntity } from "../interface/user.mapper";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = mapRequestToEntity(createUserDto);
    return await this.userRepository.create(user);
  }

  async updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.update(userId, updateUserDto);
  }

  async deleteUser(userId: number): Promise<User> {
    return await this.userRepository.delete(userId);
  }
}
import { Injectable } from "@nestjs/common";
import { UserRepository } from "../infraestructure/user.repository";
import { User } from "../domain/user.entity";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.findById(id);
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.create(user);
  }

  async updateUser(userId: number, fieldsToUpdate: Partial<User>): Promise<User> {
    return await this.userRepository.update(userId, fieldsToUpdate);
  }

  async deleteUser(userId: number): Promise<User> {
    return await this.userRepository.delete(userId);
  }
}
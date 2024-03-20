import { User } from "../domain/user.entity";
import { CreateUserDto } from "./user.dto";

export function mapRequestToEntity (request: CreateUserDto) : User {
    const user = new User();
    user.name = request.name;
    user.lastName = request.lastName;
    user.docType = request.docType;
    user.docNumber = request.docNumber;
    user.nationality = request.nationality;
    user.address = request.address;
    user.phone = request.phone;
    user.email = request.email;
    user.birthDate = request.birthDate;
    return user;
}
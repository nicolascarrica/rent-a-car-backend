import { BaseSchema } from "src/common/infraestructure/baseSchema";
import { User } from "../domain/user.entity";

export const UserSchema = new BaseSchema<User>({
  name: 'User',
  target: User,
  tableName: 'users',
  columns: {
    name: {
      type: String,
      name: 'first_name'
    },
    lastName: {
      type: String,
      name: 'last_name'
    },
    docType: {
      type: String,
      name: 'doc_type'
    },
    docNumber: {
      type: String,
      name: 'doc_number'
    },
    nationality: {
      type: String,
      name: 'nationality'
    },
    address: {
      type: String,
      name: 'address'
    },
    phone: {
      type: String,
      name: 'phone'
    },
    email: {
      type: String,
      name: 'email'
    },
    birthDate: {
      type: Date,
      name: 'birth_date'
    }
  },
});
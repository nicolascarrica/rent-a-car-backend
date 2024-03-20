import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BaseSchema } from 'src/common/infraestructure/baseSchema';
import { UserSchema } from 'src/module/user/infraestructure/user.schema';


export const typeormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './data/database.db',
  entities: [BaseSchema, UserSchema],
  synchronize: true,
};
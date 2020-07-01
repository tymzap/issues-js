import {
  Table,
  Model,
  Column,
  Unique,
  AllowNull,
  DataType,
  HasMany
} from 'sequelize-typescript';

import Issue from './issue';

@Table
export default class User extends Model<User> {
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(320))
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING(60))
  password!: string;

  @HasMany(() => Issue)
  issues?: Issue[];
}

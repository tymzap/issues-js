import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';

import User from './user';

@Table
export default class Issue extends Model<Issue> {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  name!: string;

  @AllowNull(false)
  @Column(DataType.STRING(500))
  description!: string;

  @AllowNull(false)
  @Column(DataType.ENUM('OPEN', 'PENDING', 'CLOSED'))
  status!: 'OPEN' | 'PENDING' | 'CLOSED';

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
};

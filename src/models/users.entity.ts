import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @Index({ unique: true })
  @Column({ type: 'varchar', length: 200 })
  username: string;

  @Field()
  @Index({ unique: true })
  @Column({ type: 'varchar', length: 200 })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'varchar', length: 100 })
  password: string;
}

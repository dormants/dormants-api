import { EntityRepository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

import { BaseRepository } from '@common/repositories';

import { UserEntity } from '../entities';

@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {
  plainToClass(entities: UserEntity[]): UserEntity[] {
    return plainToInstance(UserEntity, entities);
  }
}

import { Injectable } from '@nestjs/common';

import { BaseService } from '@common/base.service';

import { UserEntity } from './entities';
import { UserRepository } from './repositories';

@Injectable()
export class UsersService extends BaseService<UserEntity> {
  constructor(readonly repository: UserRepository) {
    super();
  }

  async list(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  async create(params: Partial<UserEntity>): Promise<UserEntity> {
    return this.repository.save(new UserEntity(params));
  }

  async count(params: Partial<UserEntity>): Promise<number> {
    return this.repository.count(params);
  }
}

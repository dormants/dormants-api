import { Injectable } from '@nestjs/common';

import { BaseService } from '@common/base.service';

import { UserEntity } from './entities';
import { UserRepository } from './repositories';

@Injectable()
export class UsersService extends BaseService<UserEntity> {
  constructor(readonly repository: UserRepository) {
    super();
  }

  async findOne(oauthCode: Partial<UserEntity>): Promise<UserEntity> {
    return this.repository.findOne(oauthCode);
  }

  async create(params: Partial<UserEntity>): Promise<UserEntity> {
    return this.repository.save(new UserEntity(params));
  }
}

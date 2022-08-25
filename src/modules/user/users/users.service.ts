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
}

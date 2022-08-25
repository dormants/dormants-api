import { Controller, Get } from '@nestjs/common';

import { UserEntity } from './entities';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async list(): Promise<UserEntity[]> {
    return this.usersService.list();
  }
}

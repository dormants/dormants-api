import { Controller } from '@nestjs/common';

import { UserEntity } from './entities';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}

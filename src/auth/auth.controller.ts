import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from '@user/users/users.service';
import { UserEntity } from '@user/users/entities';

import { JwtToken } from './domain';

import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/sign-in/')
  async signInByOauth(
    @Body() body: Pick<UserEntity, 'kakaoId' | 'nickname' | 'email'>,
  ): Promise<JwtToken> {
    const existingUser = await this.usersService.findOne({
      kakaoId: body.kakaoId,
    });
    if (existingUser) {
      return this.authService.createToken(existingUser.id);
    }

    const newUser = await this.usersService.create(body);
    return this.authService.createToken(newUser.id);
  }
}

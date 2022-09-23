import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';

import { UsersService } from '@user/users/users.service';
import { UserEntity } from '@user/users/entities';

import { CreateUser, JwtToken } from './domain';

import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('인증 및 유저 API')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/sign-up')
  @ApiOperation({
    summary: '회원가입',
    description:
      '현재는 카카오 로그인만 지원해서 oauthType default값이 kakao 입니다.',
  })
  @ApiBody({ type: UserEntity })
  async register(
    @Body()
    body: CreateUser,
  ): Promise<JwtToken> {
    const user = await this.usersService.findOne({
      oauthCode: body.oauthCode,
    });
    if (user) {
      return this.authService.createToken(user.id);
    }

    const newUser = await this.usersService.create(body);
    return this.authService.createToken(newUser.id);
    // const newUser = this.authService.addUser(body);
  }

  @Post('/sign-in')
  @ApiOperation({
    summary: '로그인',
  })
  @ApiBody({ type: UserEntity })
  async login(
    @Body()
    body: Pick<CreateUser, 'oauthCode' | 'oauthType'>,
  ): Promise<JwtToken> {
    const user = await this.usersService.findOne({
      oauthCode: body.oauthCode,
    });
    if (!user) {
      throw new HttpException(
        '가입 내역이 없습니다. 다시 한 번 확인해 주세요.',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.authService.createToken(user.id);
  }
}

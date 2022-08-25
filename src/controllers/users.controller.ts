import { Body, Controller, Get } from '@nestjs/common';

@Controller('me')
export class UsersController {
  @Get()
  myPage(@Body() body: any): any {
    return {
      name: '박경은',
      email: 'pye4540@kakao.com',
      sentence: body.content,
    };
  }
}

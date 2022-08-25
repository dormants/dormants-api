import { Body, Controller, Get } from '@nestjs/common';

import { MockUsers } from 'src/constants/mock';

@Controller('me')
export class UsersController {
  @Get()
  myPage(@Body() body: any): any {
    return {
      id: 0,
      name: '박경은',
      sentence: '디자이너 입니다.',
      stamp: [1, 2, 3],
    };
  }
}

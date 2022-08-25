import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { MockGroup } from 'src/constants/mock';

@Controller('groups')
export class GroupController {
  // 생성된 플로깅 그룹 확인
  @Get()
  group(): any {
    return { MockGroup };
  }

  // 줍기
  @Post('/:id/pickup')
  getTrash(@Param('id') id: string): any {
    return {};
  }

  // 그룹에 들어가기
  @Post('/:id/join')
  joinPlogging(@Param('groupId') id: string): any {
    return;
  }
}

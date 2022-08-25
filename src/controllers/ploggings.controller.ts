import { Body, Controller, Post, Param } from '@nestjs/common';

import { MockCourses, MockPloggings, Course } from 'src/constants/mock';

@Controller('ploggings')
export class PloggingsController {
  // 혼자 줍기 시작
  @Post()
  startPlogging(@Body() body: any): any {
    const course = MockCourses.filter((i) => i.id == Number(body.id));
    return { count: 0, goal: Number(body.goal), course };
  }

  // body로 받은 goal을 달성하면 성공
  trashCount = 0;
  @Post('/:id/pickup')
  getTrash(@Param('id') id: string, @Body('goal') goal: number): any {
    this.trashCount++;
    const data1 = MockPloggings.filter((i) => i.id == Number(id));
    const data2 = MockCourses.filter((i) => i.id == Number(id));
    if (goal == this.trashCount) {
      return { isFinish: true };
    }
    return { count: this.trashCount, ...data1, ...data2 };
  }
}

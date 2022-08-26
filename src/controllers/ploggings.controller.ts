import { Body, Controller, Post, Param, Get } from '@nestjs/common';

import { MockCourses, Plogging, ploggingStorage } from 'src/constants/mock';

@Controller('ploggings')
export class PloggingsController {
  // 혼자 줍기 시작
  @Post()
  startPlogging(
    @Body() { goal, courseId }: { goal: number; courseId: number },
  ): any {
    const course = MockCourses.find((i) => i.id === Number(courseId));
    const plogging = Plogging.from(goal, course);

    ploggingStorage.add(plogging);
    return plogging;
  }

  @Post('/:id/pickup')
  getTrash(@Param('id') id: string): any {
    const plogging = ploggingStorage.find(Number(id));
    plogging.pickup();
    plogging.checkFinished();
    return plogging;
  }

  @Get('/:id')
  get(@Param('id') id: string): any {
    return ploggingStorage.find(Number(id));
  }
}

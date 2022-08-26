import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { Group, groupStorage, MockCourses } from 'src/constants/mock';

@Controller('groups')
export class GroupController {
  // 생성된 플로깅 그룹 확인
  @Get()
  list(): Group[] {
    return groupStorage.groups.filter(({ isFinished }) => !isFinished);
  }

  // 생성된 플로깅 그룹 확인
  @Post()
  create(@Body() { goal, courseId }: { goal: number; courseId: number }): any {
    const course = MockCourses.find((i) => i.id === Number(courseId));
    const group = Group.from(goal, course);

    groupStorage.add(group);
    return group;
  }

  // 줍기
  @Post('/:id/pickup')
  getTrash(@Param('id') id: string): any {
    const group = groupStorage.find(Number(id));
    group.pickup();
    group.checkFinished();
    return group;
  }

  // 그룹에 들어가기
  @Post('/:id/join')
  join(@Param('id') id: string): any {
    const group = groupStorage.find(Number(id));
    group.myCount = 0;

    return group;
  }
}

import { Body, Controller, Get, Param } from '@nestjs/common';

import { MockCourses, Course } from 'src/constants/mock';

@Controller('courses')
export class CoursesController {
  @Get()
  courseList(): Course[] {
    return MockCourses;
  }

  @Get('/:id')
  course(@Param('id') id: string): Course[] {
    return MockCourses.filter((i) => i.id == Number(id));
  }
}

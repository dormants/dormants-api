import { Controller, Get } from '@nestjs/common';

import { CourseEntity } from './entities';
import { CoursesService } from './courses.service';

@Controller('/courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('/')
  async list(): Promise<CourseEntity[]> {
    return this.coursesService.list();
  }
}

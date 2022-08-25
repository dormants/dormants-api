import { Injectable } from '@nestjs/common';

import { BaseService } from '@common/base.service';

import { CourseEntity } from './entities';
import { CourseRepository } from './repositories';

@Injectable()
export class CoursesService extends BaseService<CourseEntity> {
  constructor(readonly repository: CourseRepository) {
    super();
  }

  async list(): Promise<CourseEntity[]> {
    return this.repository.find();
  }
}

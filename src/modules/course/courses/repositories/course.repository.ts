import { EntityRepository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

import { BaseRepository } from '@common/repositories';

import { CourseEntity } from '../entities';

@EntityRepository(CourseEntity)
export class CourseRepository extends BaseRepository<CourseEntity> {
  plainToClass(entities: CourseEntity[]): CourseEntity[] {
    return plainToInstance(CourseEntity, entities);
  }
}

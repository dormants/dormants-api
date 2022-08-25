import { EntityRepository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

import { BaseRepository } from '@common/repositories';

import { TagEntity } from '../entities';

@EntityRepository(TagEntity)
export class TagRepository extends BaseRepository<TagEntity> {
  plainToClass(entities: TagEntity[]): TagEntity[] {
    return plainToInstance(TagEntity, entities);
  }
}

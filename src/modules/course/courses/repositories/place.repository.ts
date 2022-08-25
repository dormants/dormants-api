import { EntityRepository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

import { BaseRepository } from '@common/repositories';

import { PlaceEntity } from '../entities';

@EntityRepository(PlaceEntity)
export class PlaceRepository extends BaseRepository<PlaceEntity> {
  plainToClass(entities: PlaceEntity[]): PlaceEntity[] {
    return plainToInstance(PlaceEntity, entities);
  }
}

import { ForbiddenException } from '@nestjs/common';
import { FindConditions } from 'typeorm';
import { instanceToPlain } from 'class-transformer';

import { BaseRepository } from './repositories';

export abstract class BaseService<
  Entity extends { id: number },
  Relations = Array<keyof Entity | `${string & keyof Entity}.${string}`>,
> {
  abstract repository: BaseRepository<Entity>;

  async get(id: number, relations?: Relations): Promise<Entity> {
    return await this.repository.get(id, relations as unknown as string[]);
  }

  async findOne(
    partial: FindConditions<Entity>,
    relations?: Relations,
  ): Promise<Entity> {
    return await this.repository.findOne(
      { ...partial, ...instanceToPlain(partial) },
      {
        relations: relations as unknown as string[],
      },
    );
  }

  async checkBelongsTo(ids: number[], userId: number): Promise<void> {
    const isMine = await this.repository.checkBelongsTo(ids, userId);
    if (!isMine) {
      throw new ForbiddenException('자신의 리소스가 아닙니다.');
    }
  }
}

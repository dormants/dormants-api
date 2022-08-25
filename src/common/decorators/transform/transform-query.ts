import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

/** http request query를 인자로 받은 Query 클래스로 변형해줍니다.
 * @param ctor : 변형할 Query생성자
 */
export const TransformQuery = <Query extends object>(
  ctor: new (...args: any[]) => Query,
) =>
  createParamDecorator(
    async (data: unknown, ctx: ExecutionContext): Promise<Query> => {
      const req = ctx.switchToHttp().getRequest();
      const query = plainToInstance(ctor, req.query, {
        enableImplicitConversion: true,
      });

      const errors = await validate(query);
      if (errors.length > 0) {
        throw new BadRequestException(
          errors.map(({ constraints }) => Object.values(constraints)[0]),
        );
      }

      return new ctor(query);
    },
  )();

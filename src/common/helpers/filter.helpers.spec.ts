import * as faker from 'faker';
import {
  Between,
  In,
  IsNull,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

import { parseFilter } from './filter.helpers';

describe('filter helpers', () => {
  describe('parseFilter', () => {
    it('should return {} when filter is falsy or empty', () => {
      expect(parseFilter(null)).toEqual({});
      expect(parseFilter(undefined)).toEqual({});
      expect(parseFilter({})).toEqual({});
    });

    it('should return exact match filter', () => {
      const strs = [faker.lorem.text(), faker.lorem.text(), faker.lorem.text()];
      expect(parseFilter({ id: 1 })).toEqual({ id: 1 });
      expect(parseFilter({ id: 1, nameIn: strs })).toEqual({
        id: 1,
        name: In(strs),
      });
    });

    it('should parse Like', () => {
      const str = faker.lorem.text();

      expect(parseFilter({ nameLike: str })).toEqual({ name: Like(`${str}%`) });
    });

    it('should parse In', () => {
      const strs = [faker.lorem.text(), faker.lorem.text(), faker.lorem.text()];
      const nums = [
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
      ];

      expect(parseFilter({ nameIn: strs })).toEqual({
        name: In(strs),
      });
      expect(parseFilter({ ageIn: nums })).toEqual({
        age: In(nums),
      });
    });

    it('should parse Between', () => {
      const [from, to] = [
        faker.datatype.number(),
        faker.datatype.number(),
      ].sort((a, b) => a - b);

      const inputs = [
        [from, to],
        [new Date(from), new Date(to)],
      ];

      for (const input of inputs) {
        expect(parseFilter({ nameBetween: input })).toEqual({
          name: Between(input[0], input[1]),
        });
      }
    });

    it('should parse Mt', () => {
      const num = faker.datatype.number();

      expect(parseFilter({ ageMt: num })).toEqual({
        age: MoreThan(num),
      });
    });

    it('should parse Mte', () => {
      const num = faker.datatype.number();

      expect(parseFilter({ ageMte: num })).toEqual({
        age: MoreThanOrEqual(num),
      });
    });

    it('should parse Lte', () => {
      const num = faker.datatype.number();

      expect(parseFilter({ ageLte: num })).toEqual({
        age: LessThanOrEqual(num),
      });
    });

    it('should parse IsNull', () => {
      [true, false].forEach((value) => {
        expect(parseFilter({ titleIsNull: value })).toEqual({
          title: value ? IsNull() : Not(IsNull()),
        });
      });
    });
  });
});

import { parseFilter } from '@common/helpers';

export abstract class BaseFilter {
  excludeFields?: string[] = [];

  get where() {
    const filter = { ...this };

    filter.excludeFields.forEach((field) => delete filter[field]);
    delete filter.excludeFields;

    return parseFilter(filter);
  }
}

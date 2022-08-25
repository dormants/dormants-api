import { Controller, Get } from '@nestjs/common';

import { MockTags, Tag } from 'src/constants/mock';

@Controller('tags')
export class TagsController {
  @Get()
  list(): Tag[] {
    return MockTags;
  }
}

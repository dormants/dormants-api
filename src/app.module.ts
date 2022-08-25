import { Module } from '@nestjs/common';

import { TagsController } from './controllers';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TagsController],
  providers: [AppService],
})
export class AppModule {}

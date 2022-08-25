import { Module } from '@nestjs/common';

import {
  TagsController,
  CoursesController,
  PloggingsController,
} from './controllers';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    TagsController,
    CoursesController,
    PloggingsController,
  ],
  providers: [AppService],
})
export class AppModule {}

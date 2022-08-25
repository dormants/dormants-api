import { Module } from '@nestjs/common';

import {
  TagsController,
  CoursesController,
  PloggingsController,
  UsersController,
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
    UsersController,
  ],
  providers: [AppService],
})
export class AppModule {}

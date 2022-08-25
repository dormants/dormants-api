import { Module } from '@nestjs/common';

import { MysqlDatabaseProviderModule } from '@providers/database/mysql';
import { UserModule } from '@user/user.module';
import { CourseModule } from '@course/course.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MysqlDatabaseProviderModule, UserModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

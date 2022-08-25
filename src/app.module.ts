import { Module } from '@nestjs/common';

import { AuthModule } from '@auth/auth.module';
import { MysqlDatabaseProviderModule } from '@providers/database/mysql';
import { UserModule } from '@user/user.module';
import { CourseModule } from '@course/course.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, MysqlDatabaseProviderModule, UserModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

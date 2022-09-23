import { Module } from '@nestjs/common';

import { AuthModule } from '@auth/auth.module';
import { UserModule } from '@user/user.module';
import { MysqlDatabaseProviderModule } from '@providers/database/mysql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, UserModule, MysqlDatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

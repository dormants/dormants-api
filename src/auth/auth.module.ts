import { JwtConfigModule } from '@config/jwt';
import { Module } from '@nestjs/common';

import { UsersModule } from '@user/users/users.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, JwtConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class JwtConfigService {
  constructor(private configService: ConfigService) {}

  get accessSecretKey(): string {
    return this.configService.get<string>('jwt.accessSecretKey');
  }
  get accessExpiresIn(): string {
    return this.configService.get<string>('jwt.accessExpiresIn');
  }
  get refreshSecretKey(): string {
    return this.configService.get<string>('jwt.refreshSecretKey');
  }
  get refreshExpiresIn(): string {
    return this.configService.get<string>('jwt.refreshExpiresIn');
  }
}

import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: 'string',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  @ApiProperty({
    example: 'qwer1234',
    description: 'oauthCode',
    required: true,
  })
  oauthCode: string;

  @IsString()
  @ApiProperty({
    example: 'kakao',
    description: 'oauthType',
  })
  oauthType: string;

  @IsString()
  @ApiProperty({
    example: '도르멍뀨',
    description: 'nickname',
    required: true,
  })
  nickname: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'dormants@gmail.com',
    description: 'email',
  })
  email: string;
}

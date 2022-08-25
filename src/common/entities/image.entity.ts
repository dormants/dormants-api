import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { Expose } from 'class-transformer';

import { Image } from '../interfaces';

export abstract class AbstractImageEntity implements Image {
  constructor(attributes?: Partial<AbstractImageEntity>) {
    if (!attributes) {
      return;
    }
    this.createdAt = attributes.createdAt;

    this.path = attributes.path;
    this.angle = attributes.angle;
  }

  @PrimaryColumn({ length: 75 })
  path: string;
  @Column({ default: 0 })
  angle: number;
  @CreateDateColumn()
  createdAt: Date;

  @Expose()
  get key(): string {
    return this.path;
  }
  set key(input: string) {
    this.path = input;
  }

  @Expose()
  get url(): string {
    return process.env.AWS_CLOUDFRONT_URL + this.key;
  }
  set url(input: string) {
    this.path = input.replace(process.env.AWS_CLOUDFRONT_URL, '');
  }
}

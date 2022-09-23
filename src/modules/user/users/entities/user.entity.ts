import { Column, Entity } from 'typeorm';

import { BaseIdEntity } from '@common/entities';

@Entity({ name: 'user' })
export class UserEntity extends BaseIdEntity {
  constructor(attrs?: Partial<UserEntity>) {
    super(attrs);
    if (!attrs) {
      return;
    }

    this.nickname = attrs.nickname;
    this.email = attrs.email;
    this.description = attrs.description;
    this.oauthCode = attrs.oauthCode;
    this.oauthType = attrs.oauthType;
  }

  @Column({ unique: true })
  nickname: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  description: string;
  @Column()
  oauthCode: string;
  @Column({ default: 'kakao' })
  oauthType: string;
}

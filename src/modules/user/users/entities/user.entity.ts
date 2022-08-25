import { Column, Entity } from 'typeorm';

import { BaseIdEntity } from '@common/entities';

@Entity({ name: 'user' })
export class UserEntity extends BaseIdEntity {
  constructor(attrs?: Partial<UserEntity>) {
    super(attrs);
    if (!attrs) {
      return;
    }

    this.kakaoId = attrs.kakaoId;
    this.nickname = attrs.nickname;
    this.email = attrs.email;
    this.goal = attrs.goal;
  }

  @Column()
  kakaoId: number;
  @Column()
  nickname: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  goal: string;
}

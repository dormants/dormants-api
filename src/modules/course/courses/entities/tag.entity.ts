import { Column, Entity, ManyToMany } from 'typeorm';
import { CourseEntity } from './course.entity';

import { BaseIdEntity } from '@common/entities';

@Entity({ name: 'place' })
export class TagEntity extends BaseIdEntity {
  constructor(attrs?: Partial<TagEntity>) {
    super(attrs);
    if (!attrs) {
      return;
    }

    this.courses = attrs.courses;
    this.name = attrs.name;
  }

  @ManyToMany('CourseEntity')
  courses: CourseEntity[];

  @Column()
  name: string;
}

import { Column, Entity, OneToMany } from 'typeorm';
import { CourseEntity } from './course.entity';

import { BaseIdEntity } from '@common/entities';

@Entity({ name: 'place' })
export class PlaceEntity extends BaseIdEntity {
  constructor(attrs?: Partial<PlaceEntity>) {
    super(attrs);
    if (!attrs) {
      return;
    }

    this.coursesOfStarting = attrs.coursesOfStarting;
    this.coursesOfEnd = attrs.coursesOfEnd;
    this.name = attrs.name;
    this.lat = attrs.lat;
    this.lng = attrs.lng;
  }

  @OneToMany('CourseEntity', 'startingPlace')
  coursesOfStarting: CourseEntity[];
  @OneToMany('CourseEntity', 'endPlace')
  coursesOfEnd: CourseEntity[];

  @Column()
  name: string;
  @Column()
  lat: number;
  @Column()
  lng: number;
}

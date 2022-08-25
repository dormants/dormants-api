import { Column, Entity, ManyToOne, ManyToMany } from 'typeorm';
import { PlaceEntity } from './place.entity';
import { TagEntity } from './tag.entity';

import { BaseIdEntity } from '@common/entities';

@Entity({ name: 'course' })
export class CourseEntity extends BaseIdEntity {
  constructor(attrs?: Partial<CourseEntity>) {
    super(attrs);
    if (!attrs) {
      return;
    }

    this.startingPlace = attrs.startingPlace;
    this.endPlace = attrs.endPlace;
    this.name = attrs.name;
    this.expectedTime = attrs.expectedTime;
    this.distance = attrs.distance;
  }

  @ManyToOne('PlaceEntity', 'coursesOfStarting')
  startingPlace: PlaceEntity;

  @ManyToOne('PlaceEntity', 'coursesOfStarting')
  endPlace: PlaceEntity;

  @ManyToMany('TagEntity', 'courses')
  tagName: TagEntity;

  @Column()
  name: string;
  @Column()
  expectedTime: number;
  @Column()
  distance: number;
}

import { Course } from './courses.constant';

let id = 0;

export class Plogging {
  id: number;
  count: number;
  goal: number;
  isFinished?: Boolean;
  course?: Course;

  pickup() {
    this.count++;
  }

  checkFinished() {
    this.isFinished = this.goal === this.count;
  }

  static from(goal: number, course: Course) {
    const res = new Plogging();
    res.goal = goal;
    res.course = course;
    res.id = id++;
    res.count = 0;
    res.isFinished = false;

    return res;
  }
}

class PloggingStorage {
  ploggings: Plogging[] = [];

  add(plogging: Plogging) {
    this.ploggings.push(plogging);
  }

  find(_id: number): Plogging {
    return this.ploggings.find(({ id }) => _id === id);
  }
}

export const ploggingStorage = new PloggingStorage();

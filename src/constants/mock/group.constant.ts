import { Course, MockCourses } from './courses.constant';

export class Member {
  id: number;
  lat: number;
  lng: number;
  count: number;
  name: string;
}

const MEMBERS: Array<Member> = [
  {
    id: 0,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },
  {
    id: 1,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },

  {
    id: 2,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },
  {
    id: 3,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },
  {
    id: 4,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },
  {
    id: 5,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },
  {
    id: 6,
    lat: 9,
    lng: 1,
    count: 0,
    name: '양병훈',
  },
];

let id = 7;

export class Group {
  id: number;
  goal: number;
  totalCount: number;
  myCount: number;
  members: Member[];
  course: Course;
  isFinished: boolean;

  pickup() {
    this.totalCount++;
    this.myCount++;
  }

  checkFinished() {
    this.isFinished = this.goal === this.totalCount;
  }

  static from(goal, course) {
    const res = new Group();
    res.id = id++;
    res.goal = goal;
    res.course = course;
    res.members = [];
    res.totalCount = 0;
    res.myCount = 0;
    res.isFinished = false;

    return res;
  }

  // 더미용 생성
  static of({ id, course, members }) {
    const res = new Group();

    res.id = id;
    res.totalCount = members.reduce((acc, cur) => (acc += cur.count), 0);
    res.goal = res.totalCount + Math.floor(10 * Math.random());
    res.course = course;
    res.members = members;
    res.myCount = 0;
    res.isFinished = false;

    return res;
  }
}

const GROUP_INPUTS = [
  {
    id: 0,
    course: MockCourses[1],
    members: [MEMBERS[0], MEMBERS[1]],
  },
  {
    id: 1,
    course: MockCourses[2],
    members: [MEMBERS[2], MEMBERS[3]],
  },
  {
    id: 2,
    course: MockCourses[0],
    members: [MEMBERS[4], MEMBERS[5]],
  },
];

const GROUPS: Array<Group> = GROUP_INPUTS.map((input) => Group.of(input));

class GroupStorage {
  groups: Group[] = GROUPS;

  add(group: Group) {
    this.groups = [group, ...this.groups];
  }

  find(_id: number): Group {
    return this.groups.find(({ id }) => _id === id);
  }
}

export const groupStorage = new GroupStorage();

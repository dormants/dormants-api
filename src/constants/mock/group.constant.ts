export type Group = {
  id: number;
  name: string;
  departure: string;
  destination: string;
  goal: number;
};

export const MockGroup: Array<Group> = [
  {
    id: 0,
    name: '함덕 해안 코스',
    departure: '조천운동장',
    destination: '함덕해수욕장',
    goal: 14,
  },
  {
    id: 1,
    name: '한담 해안 코스',
    departure: '애월카페거리',
    destination: '곽지해수욕장',
    goal: 30,
  },
  {
    id: 2,
    name: '광치기 해안 코스',
    departure: '광치기해변',
    destination: '아쿠아플래닛',
    goal: 10,
  },
];

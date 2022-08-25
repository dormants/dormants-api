export type Course = {
  id: number;
  name: string;
  expectedTime: string;
  distance: number;
  lat: number;
  lng: number;
  departure: string;
  destination: string;
  tagName: String[];
};

export const MockCourses: Array<Course> = [
  {
    id: 0,
    name: '함덕 해안 코스',
    expectedTime: '1H30M',
    distance: 1.6,
    lat: 33.5465852,
    lng: 126.6740245,
    departure: '조천운동장',
    destination: '함덕해수욕장',
    tagName: ['해양지역', '해안가주변', '짧은코스'],
  },
  {
    id: 1,
    name: '한담 해안 코스',
    expectedTime: '1H30M',
    distance: 1.2,
    lat: 33.4591063,
    lng: 126.3105979,
    departure: '애월카페거리',
    destination: '곽지해수욕장',
    tagName: ['해양지역', '도시지역', '관광지지역'],
  },
  {
    id: 2,
    name: '광치기 해안 코스',
    expectedTime: '40M',
    distance: 2.7,
    lat: 33.456349,
    lng: 126.9288368,
    departure: '광치기해변',
    destination: '아쿠아플래닛',
    tagName: ['해양지역', '해안가주변', '짧은코스'],
  },
  {
    id: 3,
    name: '신창 풍차 해안 코스',
    expectedTime: '1H',
    distance: 3.5,
    lat: 33.5465852,
    lng: 126.6740245,
    departure: '한국남부발전 국제풍력센터',
    destination: '용수리 방사탑',
    tagName: ['해양지역', '해안가주변', '짧은코스'],
  },
];

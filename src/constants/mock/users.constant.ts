export type User = {
  id: number;
  name: string;
  sentence: string;
};

export const MockUsers: Array<User> = [
  { id: 0, name: '박경은', sentence: '디자이너 입니다.' },
  { id: 1, name: '박정윤', sentence: '백엔드 개발자 입니다.' },
  { id: 2, name: '신혜리', sentence: '프론트엔드 개발자 입니다.' },
  { id: 3, name: '양병훈', sentence: '풀스택 개발자 입니다.' },
  { id: 4, name: '정재욱', sentence: '프론트엔드 개발자 입니다.' },
];

export const getRandomEle = <T = unknown>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

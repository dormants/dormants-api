export const min = <T = unknown>(a: T, b: T): T => {
  return a < b ? a : b;
};

export const max = <T = unknown>(a: T, b: T): T => {
  return a > b ? a : b;
};

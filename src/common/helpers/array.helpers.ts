export const getComplement = <T = unknown>(origin: T[], operand: T[]): T[] => {
  return [...origin].filter((ele) => !operand.includes(ele));
};

export const getUnion = <T = unknown>(a: T[], b: T[]): T[] => {
  return [...new Set([...a, ...b])];
};

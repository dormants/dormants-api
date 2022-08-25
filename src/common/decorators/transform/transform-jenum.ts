import { Transform } from 'class-transformer';

export function TransformJEnum(_enum: object): PropertyDecorator {
  return function (...args): void {
    // string -> enum
    Transform(({ value }) => _enum[value], { toClassOnly: true })(...args);
    // enum -> string
    Transform(({ value }) => value.code, { toPlainOnly: true })(...args);
  };
}

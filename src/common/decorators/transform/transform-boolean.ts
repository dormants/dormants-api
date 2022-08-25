import { Transform } from 'class-transformer';

/**
 *  boolean string으로 들어온 값을 boolean값으로 변경합니다.
 *
 *  기본적으로 class-transform시, string은 항상 true값으로 변환되기 때문에,
 *  query dto에서 boolean값을 사용하려고 할 때, 필수적으로 사용해주어야 합니다.
 */
export function TransformBoolean(): PropertyDecorator {
  return function (target: any, key: string): void {
    //boolean to boolean
    Transform(({ value }) => value, { toPlainOnly: true })(target, key);
    //any to boolean
    Transform(({ obj }) => valueToBoolean(obj[key]), { toClassOnly: true })(
      target,
      key,
    );
  };
}

const valueToBoolean = (value: any) => {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') {
      return true;
    }
    if (value.toLowerCase() === 'false') {
      return false;
    }
  }
  return Boolean(value);
};

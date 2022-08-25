export function url2Path(imageUrl: string) {
  return new URL(imageUrl).pathname.slice(1);
}

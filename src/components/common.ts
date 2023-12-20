export function clx(c: string | undefined, l: string[]) {
  if (c === undefined) {
    return "";
  }

  const i = l.findIndex((el) => el.includes(c));
  return i > -1 ? l[i] : "";
}

export type CommonProps = {
  class?: string;
};

export const typedObjectKeys = <T extends Record<string, unknown>>(obj: T) => {
  return Object.keys(obj) as (keyof typeof obj)[];
};

export const iife = <T extends (...args: any[]) => any>(
  callback: T,
): ReturnType<T> => callback();

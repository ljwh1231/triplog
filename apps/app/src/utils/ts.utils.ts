import { TIME_CONSTANTS } from '@constants';

export const delayForSeconds = (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * TIME_CONSTANTS.SECOND_AS_MILLISECOND);
  });
};

export type AllScreensParams = {
  HistoryListScreen: undefined;
  HomeScreen: {
    test: string;
  };
};

export const makeRoute = <T extends keyof AllScreensParams>(
  screenName: T,
  screenParams?: AllScreensParams[T],
): AllScreensParams[T] extends undefined
  ? { screenName: T }
  : { screenName: T; screenParams: AllScreensParams[T] } => {
  // @ts-ignore
  if (!screenParams) return { screenName } as { screenName: T };

  return { screenName, screenParams } as {
    screenName: T;
    screenParams: AllScreensParams[T];
  };
};

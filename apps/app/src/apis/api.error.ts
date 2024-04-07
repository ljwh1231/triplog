export default class TripLogError extends Error {
  tripLogErrorData: TripLogErrorData;

  static isTripLogApiError = (error: any): error is TripLogError => {
    return error instanceof TripLogError;
  };

  constructor(tripLogErrorData: TripLogErrorData) {
    super();
    this.tripLogErrorData = tripLogErrorData;
  }
}

export type TripLogErrorData = {
  code: number;
  userMessage: string;
  userTitle?: string;
};

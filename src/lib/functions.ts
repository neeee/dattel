function toDate(ISOString: string): Date;
function toDate(UNIXTimestamp: number): Date;
function toDate(datelike: any) {
  return new Date(datelike);
}

function toUtc(date: Date): Date {
  return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
}

export { toDate, toUtc };

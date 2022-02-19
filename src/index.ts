function toDate(ISOString: string): Date;
function toDate(UNIXTimestamp: number): Date;
function toDate(datelike: any)  {
  return new Date(datelike)
}

toDate(new Date().getTime())

export { toDate };

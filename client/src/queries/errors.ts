export enum Codes {
  OK,
  UNAUTHORIZED,
}

const codeLookup = {
  200: Codes.OK,
  401: Codes.UNAUTHORIZED,
} as const;

type Status = typeof codeLookup[keyof typeof codeLookup];

export class QueryError extends Error {
  status: Status;
  constructor(status: keyof typeof codeLookup) {
    super();
    this.status = codeLookup[status];
  }
}

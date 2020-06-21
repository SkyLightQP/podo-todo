export interface TodoPayload {
  readonly content: string;
  readonly date: number;
  done: boolean;
}
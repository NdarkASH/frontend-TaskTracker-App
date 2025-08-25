export enum TaskStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export function isTaskStatus(value: any): value is TaskStatus {
  return Object.values(TaskStatus).includes(value);
}

export enum TaskPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export function isTaskPriority(value: any): value is TaskPriority {
  return Object.values(TaskPriority).includes(value);
}

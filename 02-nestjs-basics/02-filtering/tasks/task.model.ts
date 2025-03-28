export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface Task {
  id?: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export type SortBy = Extract<keyof Task, "title" | "status">;

export enum SortByEnum {
  title = "title",
  status = "status",
}

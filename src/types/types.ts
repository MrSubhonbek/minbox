export interface Todo {
  id: string;
  status: "active" | "completed";
  text: string;
}

export type Status = "active" | "completed";
export type Filter = "all" | Status;

export interface GlobalState {
  todos: Todo[];
}

import { RootState } from "$/store/store";
import { Todo } from "$/types/types";
import ls from "$/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let todos = ls.get<Todo[]>("todos");
todos ??= [
  { id: uuid(), status: "active", text: "Welcome to Todo App" },
  { id: uuid(), status: "active", text: "Add a todo or edit an existing one" },
  { id: uuid(), status: "active", text: "Filter todos by their status" },
  { id: uuid(), status: "completed", text: "End of introduction" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: (todos || []) as Todo[],
  reducers: {
    add: (state, action: { payload: { text: string } }) => {
      state.push({
        id: uuid(),
        status: "active",
        text: action.payload.text,
      });
      updateLS(state);
      return state;
    },

    remove: (state, action: { payload: { id: string } }) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
      updateLS(state);
      return state;
    },

    edit: (state, action: { payload: { id: string; text: string } }) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
      updateLS(state);
      return state;
    },

    toggleStatus: (state, action: { payload: { id: string } }) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.status = todo.status === "active" ? "completed" : "active";
      updateLS(state);
      return state;
    },

    removeCompleted: (state) => {
      state = state.filter((todo) => todo.status !== "completed");
      updateLS(state);
      return state;
    },
  },
});

export const { add, remove, edit, toggleStatus, removeCompleted } =
  todosSlice.actions;
export const todosSelector = (state: RootState) => state.todos;
export default todosSlice.reducer;

function updateLS(state: Todo[]) {
  ls.set<Todo[]>("todos", state);
}

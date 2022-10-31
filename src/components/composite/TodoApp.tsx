import { CreateTodo } from "$/components/composite/CreateTodo";
import { TodoList } from "$/components/composite/TodoList";

export const TodoApp = () => {
  return (
    <main className=" h-screen w-screen flex flex-col items-center justify-center">
      <header>
        <h1 className="text-3xl py-6 text-white">TODO</h1>
      </header>
      <div>
        <CreateTodo />
        <TodoList />
      </div>
    </main>
  );
};

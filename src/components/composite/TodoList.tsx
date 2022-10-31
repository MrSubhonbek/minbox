import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { todosSelector } from "$/store/slices/todosSlice";
import { Filter } from "$/types/types";

import { TodoItem } from "$/components/composite/TodoItem";
import { TodosLeft } from "$/components/atomic/TodosLeft";
import { FilterTodos } from "$/components/atomic/FilterTodos";
import { ClearTodos } from "$/components/atomic/ClearTodos";

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  const [filter, setFilter] = useState<Filter>("all");
  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  const firstLoad = useRef(true);

  useEffect(() => {
    firstLoad.current = false;
  });

  return (
    <div>
      <div>
        {filteredTodos.map((todo, idx) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            idx={firstLoad.current ? idx : 0}
          />
        ))}
      </div>
      <div>
        <TodosLeft list={filteredTodos} />
        <div>
          <FilterTodos filter={filter} setFilter={setFilter} />
        </div>
        <ClearTodos />
      </div>
    </div>
  );
};

import { ChangeEventHandler, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { isDesktop } from "react-device-detect";

import { Todo } from "$/types/types";
import { edit, remove, toggleStatus } from "$/store/slices/todosSlice";

import { RemoveTodo } from "$/components/atomic/RemoveTodo";
import { TodoStatus } from "$/components/atomic/TodoStatus";
import { TodoText } from "$/components/atomic/TodoText";

interface Props {
  todo: Todo;
  idx: number;
}

export const TodoItem: FC<Props> = ({ todo, idx }) => {
  const dispatch = useDispatch();

  const [showButton, setShowButton] = useState(false);

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    if (!evt.target.value) {
      dispatch(remove({ id: todo.id }));
    } else {
      dispatch(edit({ id: todo.id, text: evt.target.value }));
    }
  };

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => isDesktop && setShowButton(true)}
      onMouseLeave={() => isDesktop && setShowButton(false)}
    >
      <TodoStatus
        status={todo.status}
        onChange={() => dispatch(toggleStatus({ id: todo.id }))}
      />
      <TodoText
        text={todo.text}
        completed={todo.status === "completed"}
        onChange={handleTextChange}
      />
      <RemoveTodo
        onClick={() => dispatch(remove({ id: todo.id }))}
        show={isDesktop ? showButton : true}
      />
    </div>
  );
};

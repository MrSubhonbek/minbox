import {
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { isDesktop, isMobile } from "react-device-detect";

import { add } from "$/store/slices/todosSlice";

import { RemoveTodo } from "$/components/atomic/RemoveTodo";
import { TodoText } from "$/components/atomic/TodoText";

export const CreateTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    text && dispatch(add({ text }));
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    if (isMobile && evt.target.value.slice(-1) === "\n") {
      addTodo();
      setText("");
    } else {
      setText(evt.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (evt) => {
    if (isDesktop) {
      if (!evt.shiftKey && evt.key.toLowerCase() === "enter") {
        addTodo();
        setText("");
        evt.preventDefault();
      }
    }
  };

  const handleClearText: MouseEventHandler<HTMLButtonElement> = () => {
    setText("");
  };

  return (
    <div className="flex item-center ml-6">
      <TodoText
        text={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <RemoveTodo show={!!text} onClick={handleClearText} />
    </div>
  );
};

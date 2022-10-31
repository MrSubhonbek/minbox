import { ChangeEventHandler, FC, KeyboardEventHandler } from "react";

interface Props {
  text?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  completed?: boolean;
}

export const TodoText: FC<Props> = ({
  text,
  completed,
  onChange,
  onKeyDown,
}) => {
  return (
    <label data-value={text}>
      <textarea
        className="m-2  resize-none inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-900 dark:hover:text-white dark:hover:bg-gray-600"
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
        rows={1}
        cols={60}
        placeholder="Create a new todo..."
        disabled={completed}
      />
    </label>
  );
};

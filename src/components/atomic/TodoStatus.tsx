import { ChangeEventHandler, FC } from "react";

import { Status } from "$/types/types";

interface Props {
  status?: Status;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TodoStatus: FC<Props> = ({ status = "active", onChange }) => {
  return (
    <div>
      <input
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        checked={status === "completed"}
        onChange={onChange}
        readOnly={!onChange}
      />
      <label
        htmlFor="checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      ></label>
    </div>
  );
};

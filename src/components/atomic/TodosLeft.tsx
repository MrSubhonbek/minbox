import { FC } from "react";

import { Todo } from "$/types/types";

interface Props {
  list: Todo[];
}

export const TodosLeft: FC<Props> = ({ list }) => {
  const nLeft = list.filter((todo) => todo.status === "active").length;

  return (
    <div className="flex justify-end pr-6">
      <span className="font-normal text-gray-100 dark:text-gray-100">
        {nLeft} item{nLeft === 1 ? "" : "s"} left
      </span>
    </div>
  );
};

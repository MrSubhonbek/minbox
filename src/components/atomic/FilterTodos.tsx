import { FC } from "react";

import { Filter } from "$/types/types";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const FilterTodos: FC<Props> = ({ filter, setFilter }) => {
  return (
    <div>
      {(["all", "active", "completed"] as Filter[]).map((f, idx) => (
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 mt-3 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setFilter(f)}
          key={idx}
        >
          {f.slice(0, 1).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

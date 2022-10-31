import { useDispatch } from "react-redux";

import { removeCompleted } from "$/store/slices/todosSlice";

export const ClearTodos = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="text-red-500 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={() => dispatch(removeCompleted())}
      type="button"
    >
      Clear completed
    </button>
  );
};

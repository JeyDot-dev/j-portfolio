import { useReducer } from "react";
const reducer = (state, action) => {
  const returnIndex = (value) => {
    return {
      ...state,
      index: state.index + value,
    };
  };

  switch (action.type) {
    case "next":
      if (state.index < state.array.length - 1) {
        return returnIndex(1);
      } else return returnIndex(-state.index);

    case "previous":
      if (state.index > 0) {
        return returnIndex(-1);
      } else return returnIndex(state.array.length - 1);

    case "reset":
      return returnIndex(-state.index);

    default:
      return state;
  }
};
/**
 * A custom React hook for managing an array with navigation functionality.
 *
 * @param {Array} array - The array to be managed by the hook.
 * @returns {[any, Function, number]} - Returns a tuple containing:
 *   - The current item in the array.
 *   - A dispatch function to navigate through the array (`next`, `previous`, `reset`).
 *   - The current index of the array.
 *
 * @example
 * const [currentItem, navigate, currentIndex] = useArray(["a", "b", "c"]);
 *
 *  Navigate to the next item
 * navigate({ type: "next" });
 *
 *  Navigate to the previous item
 * navigate({ type: "previous" });
 *
 *  Reset to the first item
 * navigate({ type: "reset" });
 */
export const useArray = (array) => {
  const [arrayClass, takeItem] = useReducer(reducer, {
    index: 0,
    array: array,
  });
  return [arrayClass.array[arrayClass.index], takeItem, arrayClass.index];
};

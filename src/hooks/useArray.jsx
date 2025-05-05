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
      return state.index < state.array.length - 1
        ? returnIndex(1)
        : returnIndex(-state.index);

    case "previous":
      return state.index > 0
        ? returnIndex(-1)
        : returnIndex(state.array.length - 1);

    case "reset":
      return returnIndex(-state.index);

    default:
      return state;
  }
};

export const useArray = (array) => {
  const [arrayClass, takeItem] = useReducer(reducer, {
    index: 0,
    array: array,
  });
  return [arrayClass.array[arrayClass.index], takeItem, arrayClass.index];
};

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
export const useArray = (array) => {
  const [arrayClass, takeItem] = useReducer(reducer, {
    index: 0,
    array: array,
  });
  return [arrayClass.array[arrayClass.index], takeItem, arrayClass.index];
};

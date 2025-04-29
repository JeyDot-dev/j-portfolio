import { useCallback, useState } from "react";
/**
 * A custom React hook that toggles between two values.
 *
 * @param {*} valueOne - The first value to toggle between.
 * @param {*} valueTwo - The second value to toggle between.
 * @param {*} [initialState=valueOne] - The initial state of the toggle. Defaults to `valueOne`.
 *
 * @returns {[*, Function, Function]} An array containing:
 * - The current state.
 * - A function to toggle the state between `valueOne` and `valueTwo`.
 * - A function to manually set the state.
 */
export const useToggle = (valueOne, valueTwo, initialState = valueOne) => {
  const [state, setState] = useState(initialState);
  const toggleState = useCallback(() => {
    setState((prev) => (prev === valueOne ? valueTwo : valueOne));
  }, [valueOne, valueTwo]);
  return [state, toggleState, setState];
};

import { Button } from "@chakra-ui/react";

/**
 * A button component for switching themes, built with Chakra UI's Button.
 *
 * @param {Object} props - Additional props to pass to the Button component.
 * @param {"previous" | "next" | "reset"} action - The action to perform (e.g., switch to the previous theme, next theme, or reset theme).
 * @param {Function} handler - The function to handle the theme switching logic.
 * @param {React.ReactNode} [children] - Optional children to render inside the button. Defaults to a label based on the action.
 *
 * @returns {JSX.Element} The theme switch button component.
 */

export const ThemeSwitchButton = ({ action, handler, children, ...props }) => {
  const labels = {
    previous: "Previous Theme",
    next: "Next Theme",
    reset: "Reset Theme",
  };

  return (
    <Button onClick={() => handler({ type: action })} w="9rem" {...props}>
      {children ? children : labels[action]}
    </Button>
  );
};

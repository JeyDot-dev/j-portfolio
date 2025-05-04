import { createContext, useContext, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useBreakpointValue } from "@chakra-ui/react";

const VisibilityContext = createContext();

export const VisibilityProvider = ({ anchorLinks, children }) => {
  const refs = Object.values(anchorLinks).reduce((acc, section) => {
    acc[section] = useRef();
    return acc;
  }, {});
  const isMobile = useBreakpointValue(
    { base: true, xl: false },
    { fallback: false },
  );
  const breakpoint = isMobile ? 0.28 : 0.67;
  const [isVisible] = useIntersectionObserver(refs, breakpoint, "0% 0% 0% 0%");
  return (
    <VisibilityContext.Provider value={{ isVisible: isVisible, refs: refs }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibilityContext = () => useContext(VisibilityContext);

import { useEffect, useState } from "react";

// const refs = {
//   heading: useRef(null), // Ref for the heading element
//   arrow: useRef(null),   // Ref for the arrow element
//   logo: useRef(null),    // Ref for the logo element
// };

export function useIntersectionObserver(
  refs = {},
  threshold = 0.5,
  rootMargin = "0px",
) {
  const [observedElements, setObservedElements] = useState(() => {
    return Object.keys(refs).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedObservedElements = entries.reduce((acc, entry) => {
          acc[entry.target.id] = entry.isIntersecting;
          // console.log(`Visible: ${entry.target.id} | ${entry.isIntersecting}`);
          return acc;
        }, {});
        setObservedElements((prev) => ({
          ...prev,
          ...updatedObservedElements,
        }));
      },
      {
        rootMargin: rootMargin,
        threshold: threshold,
      },
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [threshold]);

  return [observedElements];
}

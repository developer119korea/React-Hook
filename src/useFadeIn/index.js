import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export const App = () => {
  const fadeInH1 = useFadeIn(1, 1);
  const fadeInP = useFadeIn(5, 1);
  return (
    <div>
      <h1 {...fadeInH1}>FadeIn H1</h1>
      <p {...fadeInP}>FadeIn P</p>
    </div>
  );
};
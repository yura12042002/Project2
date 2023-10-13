import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(initialValue);
  };
  return [count, increase, reset];
};

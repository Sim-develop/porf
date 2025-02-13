"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const restart = () => {
    setCount(initialCount);
  };

  const switchSigns = () => {
    setCount((prevCount) => -prevCount);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="flex">
        Count: <p data-testid="count">{count}</p>
      </h1>
      <div className="flex items-center gap-3">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={restart}>Restart</Button>
        <Button onClick={switchSigns}>Switch Signs</Button>
      </div>
    </div>
  );
};

export default Counter;

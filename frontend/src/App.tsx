import React from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import { Button } from "./components/ui/button";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="border-8 rounded-lg border-pink-800 w-[300px] h-[300px] my-0 mx-auto">
      <h1>Hellow World, value should be &apos;10&apos;</h1>
      <h2>{count}</h2>
      <div className="grid gap-2">
        <Button onClick={() => dispatch(increment())}>+1</Button>
        <Button onClick={() => dispatch(decrement())}>-1</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
      </div>
    </div>
  );
}

export default App;

"use client";
import { increment } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Clicked :{count} times
      </button>
    </div>
  );
};

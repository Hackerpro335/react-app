import React, { useState } from "react";
import { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "../common/button/Button";
import { increment, decrement, reset } from '../../store/reducers/counterSlice';
import "./Counter.css";

interface RootState {
    counter: {
      count: number;
    };
  }

interface CounterProps {
    //props type
}

const Counter: React.FC <CounterProps> = () => {

    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    //const [count, setCount] = useState<number>(0);

    return (
        <div className="counterBlock">

        <h1>Counter: {count}</h1>
        
        <div>
        <Button onClick={() => dispatch(increment())}>👍</Button>
        <Button onClick={() => dispatch(decrement())}>👎</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        </div>
        
        </div>
    )
};

export default Counter;
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from '../services/constants/counterConstant';

export default function ReduxCounter() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch({ type: INCREMENT });
    }
    const handleDecrement = () => {
        dispatch({ type: DECREMENT });
    }
    const handleReset = () => {
        dispatch({ type: RESET });
    }

    return (
        <>
            <div>
                <h2>Counter App Using Redux</h2>

                <h3>Count : {count}</h3>

                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

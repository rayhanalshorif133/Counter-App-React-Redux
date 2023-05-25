import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter App</h2>

            <h3>Count : {count}</h3>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

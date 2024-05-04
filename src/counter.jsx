
import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const Decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }


    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-btn" onClick={Decrement}>decrement</button>
            <button className="counter-btn" onClick={reset}>Reset</button>
            <button className="counter-btn" onClick={Increment}>Increment</button>

        </div>
    )



}


export default Counter
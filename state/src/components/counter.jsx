import { useState } from "react" 
export function Counter() {
    const [counter, setCounter] = useState(0)
    function handleCounterPlus() {
        setCounter((x) => x + 1)
    }
    function handleCounterReset() {
        setCounter(0)
    }
    return (
        <div>
            <h2>Display Counter</h2>
            <p>{counter}</p>
            <button onClick={handleCounterPlus}>+1</button>
            <button onClick={handleCounterReset}>RESET</button>
        </div>
    )
}
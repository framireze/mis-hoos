import { useState } from "react"

export const useCounter = (initial = 100) => {
    const [counter, setCounter] = useState(initial);

    /*const increment = (step=1) =>{
        setState(state + step)
    }
    const decrement = (step=1) =>{
        setState(state - step)
    }*/
    const increment = () =>{
        setCounter(counter + 1)
    }
    const decrement = () =>{
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initial)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

import { useState } from "react"

export default function Counter() {
    const [Count,setCount] = useState(0)
    // console.log(Count)

    const handelClick = () => {
        const newCount = Count + 1
        setCount(newCount);
    }

    const handelClick2 = () => {
        const newCount = Count - 1;
        setCount(newCount);
    }

    return (
        <div style={{border: '5px solid red', padding: '30px'}}>
            <h3>Counter: {Count}</h3>
            <button onClick={handelClick}>Count +</button>
            <button onClick={handelClick2}>Count -</button>
        </div>
    )
}
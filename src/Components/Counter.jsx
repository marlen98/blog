import React, {useState} from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const [value, setValue] = useState ('');
    function incr (){setCount(count+1)};
    function decr (){setCount(count-1)};
    function dis (e) {setValue(e.target.value)}
    return (
        <>
        <input type="text" onChange={dis} value={value}/>
        <div>{value}</div>
        <h1>{count}</h1>
        <button onClick={decr}>DECR</button>
        <button onClick={incr}>INCR</button>
        </>
    )
}

export default Counter;
'use client'
import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    console.log('counter value in counter component', count);
    return (
        <div>
            <h2 className="text-5xl">Counter: {count}</h2>
            <button className="px-5 py-2 rounded-xl text-black mt-4 cursor-pointer bg-white"
                onClick={() => setCount(count + 1)}
            >Increment</button>
        </div>
    );
};

export default Counter;
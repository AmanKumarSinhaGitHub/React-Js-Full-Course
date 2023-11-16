import { useState } from "react";
import "./IncrementDecrement.css";

function IncrementDecrement() {

    console.log("Rendering Increment Decrement COUNTER")

    const [count, setCount] = useState(1)


    function handlePlusClick() {
        setCount(count + 1)
    }

    function handleMinusClick() {
        setCount(count - 1)
    }
    return (
        <>
            <div className="box">
                <h3>Increment & Decrement</h3>
                <p>{count}</p>
                <div className="countBtn">
                    <button onClick={handleMinusClick}>➖</button>
                    <button onClick={handlePlusClick}>➕</button>
                </div>
            </div>

        </>
    )
}

export default IncrementDecrement;
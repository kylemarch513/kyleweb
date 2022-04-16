import React, { useState } from 'react';

function Counter () {
    const [count, changeCount] = useState(0);


    const plusClick = () => {
        changeCount(count + 1);
    }

    const minusClick = () => {
        changeCount(count - 1);
    }
    
    const resetClick = () => {
        changeCount(count = 0);
    }

    if (Math.abs(count) < 10) {
        return (
            <div>
                <button onClick={plusClick}>Press to Increase</button>
                <></>
                <button onClick={minusClick}>Press to Decrease</button>
                <h4>{count}</h4>
            </div>
    
        )
    } else {
        return (
            <div>
                <h1>You clicked too much</h1>
                <button onClick={resetClick}> Press here to return to normal</button>
            </div>
        )
    }

   
}
export default Counter
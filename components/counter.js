import React, { useState } from 'react';

function Counter () {
    const [count, changeCount] = useState(0);
    const [clickCount, changeClickCount] = useState(0);


    const plusClick = () => {
        changeCount(count + 1);
        changeClickCount(clickCount +1);
    }

    const minusClick = () => {
        changeCount(count - 1);
        changeClickCount(clickCount +1);
    }
    
    const resetClick = () => {
        changeCount(count = 0);
    }

    if (Math.abs(count) < 10) {
        return (
            <div>
                <h1>You have now reached {clickCount} clicks in total</h1>
                <button onClick={plusClick}>Press to Increase</button>
                <></>
                <button onClick={minusClick}>Press to Decrease</button>
            </div>
    
        )
    } else {
        return (
            <div>
                <h1>You have now reached {clickCount} clicks in total</h1>
                <button onClick={plusClick}>Press to Increase</button>
                <></>
                <button onClick={minusClick}>Press to Decrease</button>
                <h1>The absolute value of your clicks is now greater than or equal to 10</h1> 
                <button onClick={resetClick}> Press here to reset</button>
            </div>
        )
    }

   
}
export default Counter
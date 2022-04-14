import React, { useState } from 'react'

function UserName () {
    const [id, setId] = useState ('default')
    const handleClick = () => setId (prompt('Please enter Username'))


    if (id == '1234') {
        console.log('hello world');

    } else {
        console.log('goodbye world');
    };

    return (

        <button onClick={handleClick}>
            My Name is {id}
        </button>
    );


}






export default UserName
import React, {useState, useEffect} from 'react'

function LogIn () {
    const [password, setPassword] = useState ([]);


    const handleClick =() => {
        setPassword(password = (prompt('Enter password here')));
        useEffect(() =>{
            localStorage.setItem('password', JSON.stringify(password));
        },[password]);
        console.log(password);
    }
    return (
    <div>
        <button onClick={handleClick}>
            Enter password.
        </button>
        
    </div>
    )
}
export default LogIn;
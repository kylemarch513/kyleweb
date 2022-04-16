import React, {useState} from 'react'

function Themer (){
    const [theme, setTheme] = useState('day');

    const setNight = () => {
        setTheme(theme = 'dark');
    }
    const setDay = () => {
        setTheme(theme = 'day');
    }

    return (
        <ul>
        <button onClick={setDay}>Day</button> 
        <button onClick={setNight}>setNight</button>
        </ul>
    );
}
export default Themer
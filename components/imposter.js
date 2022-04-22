import React, {useState, useEffect} from "react";
import Picture from "./theimposter.jpg";
import Image from "next/image";



function Amongus (props) {
    const [isImposter, setImposter] = useState (true)

    useEffect(() => {
        console.log('itsworking');
        window.scrollTo('0', '0');
    }

    );[isImposter]


    const handleClick = () => showImposter ()
    let status;
    if (!isImposter) {
        (status) = 'Sus'
    } else {
        (status) = 'Not Sus'
    }

    function showImposter () {
        setImposter(!isImposter);
        randomName ();
        
    }
    function randomName () {
        if (isImposter) {
            window.open("https://www.youtube.com/watch?v=9WX97X4MN6s");
        } else {
            console.log('false');
        }
    }    

    if(isImposter){
        return (
            <div>
                <button
                onClick={handleClick}>
                    {props.text}
                </button>
                <h3>
                    Sus status : {status}
                </h3>
            </div>
        )} else {
            return (
                <div>
                    <button
                        onClick={handleClick}>
                            {props.text}
                    </button>
                    <h3>
                        Sus status : {status}
                    </h3>
                    <Image onClick={handleClick} src={Picture} layout='fill' sizes="50vw"/>
                </div>
            )
        }
    }
;

export default Amongus
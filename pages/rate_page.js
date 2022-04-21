import React, {useState,useEffect, useLocalStorage} from "react";
import Review from "../components/post";
import Layout from "../components/layout";
import Head from "next/head";
import ImposterButton from "../components/imposter"
import LogIn, {password} from "../components/login"
import ls from 'local-storage'
//import UserName from '../components/username'
//import SelfReport from "../components/suschecker";



function Rating () {
    const [password, setPassword] = useState ();

    
    const handleClick =() => {
        //setPassword(password = (prompt('Enter password here')));
        //localStorage.setItem('password', JSON.stringify(password));
        setPassword(ls.set("password", prompt('EnterPasswordHere')));
        console.log(ls.get("password"))
    }


    //Json.parse(localStorage.getItem('password'));
    if ((ls.get("password")) === ('kanye2020')) {
        return (
                <div>
                <Head>
                    <title>About Me</title>
                </Head>
                <Layout>
                    <div>
                        <h2 onClick={handleClick}>Kyle March</h2>
                        <p>A: 6'4, half Chinese, half American, born and raised in Amsterdam, and in the top 1.2% of ARAM players in EUW. I am a up and coming developer to be (hopefully), if my crippling League of Legends and GuildWars2 addiction don't get the better of me.</p>
                        <ul>
                            League IGN: ChAoS513 (Made this account when I was 12 please ignore the obscenely edgy name)
                            <p />
                            GW2 Acc ID: Triarch.9183
                            <p />
                            Instagram: @_kyle.march
                        </ul>
                    </div>
                    <Review name="Maike" message="'Hey. Je bent echt kaulo sexy'" stars="★★★★☆"/>
                    <Review name="Tilde" message="'regret not giving you my superlike damn, you're so cute i'm taken aback'" stars="★★★★★"/>
                    <Review name="(also) Tilde" message="'have you ever been touched by a girl? .... because you kind of seem like you haven't'"/>
                    <ImposterButton text="Click this button if you are sus"/> 
                    
                </Layout>
            </div>
                )
    } else {
        return (
            <div>
                <button onClick={handleClick}>Please Enter Password To Continue</button>
            </div>
        )
        }
    
}

export default Rating
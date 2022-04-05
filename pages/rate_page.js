import React from "react";
import Review from "../components/post";
import Layout from "../components/layout";
import Head from "next/head";
import ImposterButton from "../components/imposter"
//import SelfReport from "../components/suschecker";



function Rating () {
    return (
        <div>
            <Head>
                <title>Messages from Tinder</title>
            </Head>
            <Layout>
                <div>
                    <h2>Kyle March</h2>
                    <p>A: 6'4, half Chinese, half American, born and raised in Amsterdam, and in the top 1.2% of ARAM players in EUW. I am a up and coming developer to be (hopefully), if my crippling League of Legends and GuildWars2 addiction don't get the better of me.</p>
                </div>
                <Review name="Maike" message="'Hey. Je bent echt kaulo sexy'" stars="★★★★☆"/>
                <Review name="Tilde" message="'regret not giving you my superlike damn, you're so cute i'm taken aback'" stars="★★★★★"/>
                <Review name="(also) Tilde" message="'have you ever been touched by a girl? .... because you kind of seem like you haven't'"/>
                <ImposterButton />
                
            </Layout>
        </div>
    
 );
}

export default Rating
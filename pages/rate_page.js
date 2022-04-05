import React from "react";
import Review from "../components/post";
import Layout from "../components/layout";
import Head from "next/head";



function Rating () {
    return (
        <div className="ratings">
            <Head>
                <title>Messages from Tinder</title>
            </Head>
            <Layout>
                <div>
                    <h2>Kyle March</h2>
                    <p className="body">A: 6'4, half Chinese, half American, born and raised in Amsterdam, and in the top 1.2% of ARAM players in EUW. Kyle March is a </p>
                </div>
                <Review name="Maike" message="'Hey. Je bent echt kaulo sexy'" stars="★★★★☆"/>
                <Review name="Tilde" message="'regret not giving you my superlike damn, you're so cute i'm taken aback'" stars="★★★★★"/>
                <Review name="(also) Tilde" message="'have you ever been touched by a girl? .... because you kind of seem like you haven't'"/>


            </Layout>
        </div>

 );
}
export default Rating
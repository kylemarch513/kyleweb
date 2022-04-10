import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import img1 from "../images/export_canvas_moodboard-clouds-and-water-220116_0143.jpg"
import img2 from "../images/IMG_2644.jpg"
import phonto from "../images/phonto 3.png"
import img3 from "../images/Sketches and Swatches (Picture) 1.png"
import img4 from "../images/Sketches and Swatches (Picture) 2.png"
import img5 from "../images/Sketches and Swatches (Picture) 3.png"
import img6 from "../images/Sketches and Swatches (Picture).png"


function Emile () {
    return (
        <div>
            <Head>
                <title>Emile's Portfolio</title>
            </Head>
            <Image src={phonto} height="75%" width="75%"/>
            <Layout>
                <Image src={img1}/>
                <Image src={img2}/>
                <Image src={img3} height="30" width="30"/>
                <Image src={img4}/>
                <Image src={img5}/>
                <Image src={img6}/>
            </Layout>
        </div>
       
    )
}

export default Emile
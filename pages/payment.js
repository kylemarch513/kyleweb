import react, {useState, useEffect} from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Nft1 from '/home/kyle/kyleweb/images/nft/New Jesus is king merch.png';
import Nft2 from '/home/kyle/kyleweb/images/nft/moredrain.jpeg';
import Nft3 from '/home/kyle/kyleweb/images/nft/20220611_013346.jpg'
import Nft from "../components/nft";
//<Nft name = "UNIT #002" description = "1 of 1 unique hand crafted NFT (non fungible token). Please do not screenshot until u have completed the transaction." image = {Nft2}/>
//<Nft name = "Unit #003" description = "cat." image = {Nft3} />

export default function Payment () {


    return(
        <div>
            <Layout/>
            <h1>
                Stripe Payment placeholder
            </h1>
            <div>
                <ul>
                    <p>Donate to charity, for a good cause!</p>
                    <p></p>
                </ul>
                <Nft name = "UNIT #001" description = "Premium Well Designed Kanye East Impsired NFT" image = {Nft1} price= "price_1LFSRIABSC1hABgHEVcfA32I"/>
                
            </div>
        </div>



    )

}
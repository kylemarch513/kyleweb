import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Nft1 from '/images/nft/New Jesus is king merch.png';
import Nft2 from '/images/nft/moredrain.jpeg';
import Nft3 from '/images/nft/20220611_013346.jpg'
import Nft from "../components/nft";
import { loadStripe } from "@stripe/stripe-js";
//<Nft name = "UNIT #002" description = "1 of 1 unique hand crafted NFT (non fungible token). Please do not screenshot until u have completed the transaction." image = {Nft2}/>
//<Nft name = "Unit #003" description = "cat." image = {Nft3} />

const stripePromise = loadStripe(
  `${process.env.STRIPE_PUBLIC_KEY}`,
);
export default function PreviewPage() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <div>
        <Layout/>
        <h1>NFT Marketplace</h1>
        <h2>Do not feel free to screenshot!!</h2>

        <Nft name='NFT UNIT #001' description = 'Premium Well Designed Kanye East Impsired NFT' image={Nft1} apiroute = "/api/checkout_sessions/nft1"/>
        <Nft name='NFT UNIT #002' description = '1 of 1 unique hand crafted NFT (non fungible token). Please do not screenshot until u have completed the transaction.' image={Nft2} apiroute = "/api/checkout_sessions/nft2"/>
        <Nft name='NFT UNIT #003' description = 'cat.' image={Nft3} apiroute = "/api/checkout_sessions/nft3"/>
    </div>
  );
}


import React, {useEffect, useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Layout from '../components/layout'




export default function Donate (){
    const [publicKey, setPublicKey] = useState('')


    useEffect(()=> {
        fetch('api/keys', {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'},
        })

        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPublicKey(data.publicKey);
        });
    });

    if(!publicKey) {
        return 'Nya~~ somethings wrong uWu';
    }

    const stripe = loadStripe(publicKey);


    return (
        <div>
            <Layout/>

        </div>
    )
}
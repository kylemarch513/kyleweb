//obsolete


import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import Head from 'next/head';


import useApi from '../components/useApi';
import Image from 'next/image';
import useWaifu from '../components/refetchapi';

const Waifu = () => {
   //const { loading, data, setData } = useApi('https://api.waifu.im/random/')
   const [tag, setTag] = useState('')
   const {animeUrl} = useWaifu(tag)

   let photo = (null);
   function handleClick() {
        //window.location.reload();
        setTag('https://api.waifu.im/' + prompt('type a tag') + '/');
        console.log(tag);
   }

   useEffect(() => {
        const { animeUrl } = useWaifu(tag)
   },[handleClick]);

    //if(loading) return <h1>loading</h1>

    return <div>
        <h1>Data fetched</h1>
        {/*{photo = (data['images'][0]['url'])}
        {JSON.stringify(data)}
        <Image 
            src={photo}
            layout = 'intrinsic'
            width='500'
            height='500'
            onClick={handleClick}
        
/>
*<p>asdas{status}</p>*/}
        <img
            src={animeUrl}
            alt="sasd" 
            width='500'
            height='500'
        />
    <button onClick={handleClick}>CLICK HERE</button>
    </div>
};
export default Waifu
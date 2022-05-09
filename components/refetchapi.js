//obsolete

import React, {useState, useEffect} from 'react';

function useWaifu (url) {
    const [animeUrl, setAnimeUrl] = useState ('');

    const fetchApi = () => {
        fetch(url)
        .then(response =>{
            return response.json()
        })
        .then(json => {
            setAnimeUrl(json['images'][0]['url'])
            console.log(json['images'][0]['url'])
        })
    }

    useEffect (() => {
        fetchApi();
    },[])



    return { animeUrl, fetchApi }
}

export default useWaifu


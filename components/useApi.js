//obsolete
//custom useapi hook
import React,{useEffect, useState} from 'react'

function useApi (url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchApi = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
            setLoading(false)
            setData(json)
        })
    };

    useEffect(()=> {
        fetchApi();
    },[]);

    return { loading, data, setData }
};

export default useApi;
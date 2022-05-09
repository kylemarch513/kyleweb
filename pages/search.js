import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';

function Search (){
   const [girlUrl, setGirlUrl] = useState ('https://api.waifu.im/random/');
   const [tag, setTag] = useState ('')
   function handleClick(){
       setTag('?selected_tags=' +(prompt('tag')));
       console.log(url)
   };
   let url = 'https://api.waifu.im/random/' + tag

   useEffect(()=>{
       getGirl();
   },[])

   let getGirl = () => {
       console.log('hello')

       fetch(url)
       .then((res) => res.json())
       .then((girls) => {
           console.log('girls: ', girls);
           const girl = girls['images'][0]['url']
           console.log(girl)
           setGirlUrl(girlUrl=girl)
       })
   }

   return(
       <div>
           <Layout/>
           <ul><img
            src={girlUrl}
            height='500'
            width='500'
           /><p1>Tags:Maid, waifu, blank.</p1></ul>
           <button onClick={getGirl}>
               Click for Random photo
           </button>
           <button onClick={handleClick}>
               To change Tags
           </button>
       </div>
   )

}
export default Search
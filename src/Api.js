import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import News from './components/News';
const Api = () => {



const [exist,setExist]=useState()
const [write,setWrite]=useState()


const [get, setGet]= useState([]);


useEffect(()=>{
  //add an key to run the project
const KEY ="";

const all = async ()=>{
const after = await axios.get(`https://newsapi.org/v2/everything?q=${exist}&sortBy=popularity&apiKey=${KEY}`)

setGet(after)
};



all();

},[exist]);



if (get){
  
}


const Component=get?.data?.articles.map((info,i)=>{
return(
 <News urlToImage={info.urlToImage} url={info.url} title={info.title} key={i} />

) 
})





  return (
    <>
<input className='input' placeholder='News' value={write} onChange={(e)=>{setWrite(e.target.value) }}  />
<button className='button' onClick={(e)=>{e.preventDefault(); setExist(write)}}>Go</button>

{Component }
    </>
  )
}

export default Api;









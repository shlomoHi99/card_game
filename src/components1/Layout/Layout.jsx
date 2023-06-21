import { useState, useEffect } from 'react'
import React from 'react'
import Input from "../Input/Input";
import Jokes from '../Jokes/Jokes';

export default function Layout() {

    const [categories, setCategories] = useState([]);
    const [option, setJokeOption] = useState([])
    const [joke, setJoke] = useState("")
    useEffect(function(){
      fetch('https://api.chucknorris.io/jokes/random')
      .then(function(respond){
          return respond.json();
      })
      .then(function(data){
        setCategories(data);
      })
    }, [])

    

    

    console.log(joke);

  return (
    <div>
        <Input categories={categories} setJokeOption={setJokeOption}/>
        <Jokes joke={joke} option={option} setJoke={setJoke}/>
    </div>
  )
}

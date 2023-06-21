import {React} from 'react'
import { useState, useEffect } from 'react'


export default function Jokes({joke, option, setJoke}) {

    useEffect(function(){
        fetch(`https://api.chucknorris.io/jokes/random?category=${option}`)
        .then(function(respond){
            return respond.json();
        })
        .then(function(data){
            setJoke(data);
        })
      }, [option])

  return (
    <>{joke.value}</>
  )
}

import React from 'react';
import "./Input.css";

export default function Input({categories, setJokeOption}) {
    const ctegoriesList = categories.map(function(item, i){
        return <option value={item} key={i}>{item}</option>
    })
  return (
    <div>
        <select name={'categories'} id="" onSelect={
            function(e){
                return setJokeOption(e.target.value)
            }
        }>
            <option value="">Select Category</option>
            {ctegoriesList}</select>
    </div>
  )
}

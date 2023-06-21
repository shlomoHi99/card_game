import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
    const [searchValue, updateSearchValue] = useState();


  return (
    <div className="d-flex justify-content-between p-3 bg-dark bg-gradient ">
      <div className="d-flex">
        <Link to={''} className='btn btn-primary mx-2'>Home</Link>
        <Link to={'trivia'} className='btn btn-primary mx-2'>Trivia</Link>
        <Link to={'game'} className='btn btn-primary mx-2'>Game</Link>
      </div>
        <div className="d-flex">
        <input type="text" name="" id="" className="search" onChange={(e) => updateSearchValue(e.target.value)}/>
        <Link to={`../search/${searchValue}`} ><button className="btn btn-light">Search</button></Link>
        </div>
    </div>
  )
}

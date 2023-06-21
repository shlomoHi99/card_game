import { useState } from 'react';
import { Link } from 'react-router-dom';
import Questions from '../Questions.json'
import CatalogMagic from './CatalogMagic';

export default function Game() {
    const [loading, setLoading] = useState(true);
    
    let renderQuestions = Questions.map(function(item, i){
            return (
            <Link to={`../trivia/${i}`} className="card col-2 m-2 text-decoration-none text-dark justify-content-evenly" key={i}>
                <img
                    src={
                        item.questionUrl || 
                        'https://static.vecteezy.com/system/resources/thumbnails/001/991/202/small/realistic-isolated-neon-sign-of-question-template-decoration-and-covering-on-the-wall-background-vector.jpg'
                    } 
                    alt="" 
                    className='img-fluid m-1'
                />
                <p className='fw-bold m-1'>{item.question}</p>
            </Link>
        )
    })

    setTimeout(function(){
        setLoading(false);
    },1000)

    if(loading)
        return(
            <div className="d-flex justify-content-center align-items-center">
        <CatalogMagic/>
        </div>
        )
    return (
        <div className=' bg-info bg-gradient'>
            <div className="d-flex flex-wrap container">{renderQuestions}</div>
        </div>
  )
}

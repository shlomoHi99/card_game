import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Questions from '../Questions.json'
import ThreeDots from "./Dots";


export default function CompetitiveGame() {
    const [toughness, setToughness] = useState('general');
    const [curRenderQuestions, setCurRenderQuestions] = useState([]);



    function ChangeToughness(type) {
        setToughness(type)
    }

    let renderQuestions = Questions.map(function (item, i) {
        return (
            <Link id={item.level} to={`../trivia/${i}`} className="card col-2 m-2 text-decoration-none text-dark justify-content-evenly" key={i}>
                <img
                    src={
                        item.questionUrl ||
                        'https://static.vecteezy.com/system/resources/thumbnails/001/991/202/small/realistic-isolated-neon-sign-of-question-template-decoration-and-covering-on-the-wall-background-vector.jpg'
                    }
                    alt=""
                    className='img-fluid m-1 align-self-center'
                    style={(i === 0 || i === 1) ? {width:'50%'} : null}
                />
                <p className='fw-bold m-1'>{item.question}</p>
            </Link>
        )
    })

    useEffect(function () {
            if( toughness !== 'general'){
                setCurRenderQuestions (renderQuestions.filter(function(item){
                    console.log(item);
                    return item.props.id === toughness
                }))
            }
            else{
                setCurRenderQuestions (renderQuestions);
            }
        }, [toughness])


    return (
        <div style={(toughness !== 'general') ? {width:'100vw', height:'90vh'} : null} className=' bg-info bg-gradient'>
            <div className="container rounded bg-light bg-gradient col-12 d-flex justify-content-evenly p-2">
                <button className="btn btn-warning btn-lg" onClick={() => ChangeToughness('easy')}>Easy</button>
                <button className="btn btn-warning btn-lg" onClick={() => ChangeToughness('medium')}>Medium</button>
                <button className="btn btn-warning btn-lg" onClick={() => ChangeToughness('hard')}>Hard</button>
            </div>
            {(curRenderQuestions.length === 0)?
            (<div className="bg-white d-flex justify-content-center align-items-start">
                <ThreeDots />
            </div>) :
            (<div className="d-flex flex-wrap container">
                {curRenderQuestions}
            </div>)}
        </div>
    )
}



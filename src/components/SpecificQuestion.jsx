import { useParams, Link } from 'react-router-dom';
import Questions from '../Questions.json';


export default function SpecificQuestion() {

    const {questionId} = useParams();

    let curQuestion = Questions[questionId];
    let answers = [...curQuestion.wrongAnswers, curQuestion.rightAns];
    answers.sort(() => Math.random() - .5);

  return (
    <div style={((questionId !== '0') && (questionId !== '1')) ? {width:'100vw', height:'90vh', justifyContent:'center'} : null} className="d-flex flex-column align-items-center bg-info bg-gradient ">
        <img
            src={curQuestion.questionUrl} 
            alt="" 
            className="col-3 img-thumbnail m-2" 
            style={(!curQuestion.questionUrl) ? {display:'none'} : null}
        />
        <h1 className="fw-bold m-3">{curQuestion.question}</h1>
        <div className="d-flex justify-content-evenly">
            <div className="d-flex flex-column justify-content-evenly align-items-top p-3">
                <Link to={`../trivia/${questionId}/${answers[0]}`} className='btn btn-primary btn-lg m-2'>{answers[0]}</Link>
                <Link to={`../trivia/${questionId}/${answers[1]}`} className='btn btn-primary btn-lg m-2'>{answers[1]}</Link>
            </div>
            <div className="d-flex flex-column justify-content-evenly align-items-bottom p-3">
            <Link to={`../trivia/${questionId}/${answers[2]}`} className='btn btn-primary btn-lg m-2'>{answers[2]}</Link>
            <Link to={`../trivia/${questionId}/${answers[3]}`} className='btn btn-primary btn-lg m-2'>{answers[3]}</Link>
            </div>
        </div>
    </div>
  )
}

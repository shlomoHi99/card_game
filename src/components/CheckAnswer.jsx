import Confetti from 'react-confetti'
import { useParams, Link } from 'react-router-dom';
import Questions from '../Questions.json';


export default function CheckAnswer() {
    const {questionId} = useParams();
    const {answerId} = useParams();

    let curQuestion = Questions[questionId];
    let messageToPlayer = (curQuestion.rightAns === answerId) ? 'Yay! That is the correct answer' : "Nope! That's not it";

    return(
        <>
        {(curQuestion.rightAns === answerId) ? 
        (
            <Confetti
                width={window.innerWidth - 10}
                height={window.innerHeight - 10}
            />
         ) : null}
        <div style={{width:'100vw', height:'90vh'}} className='bg-info bg-gradient d-flex flex-column justify-content-evenly align-items-center'>
            <img 
                className='col-2 rounded-4' 
                src={
                    (curQuestion.rightAns === answerId) ? 
                    'https://media.istockphoto.com/id/157030584/vector/thumb-up-emoticon.jpg?s=612x612&w=0&k=20&c=GGl4NM_6_BzvJxLSl7uCDF4Vlo_zHGZVmmqOBIewgKg='
                    : 'https://previews.123rf.com/images/alvincadiz/alvincadiz1604/alvincadiz160400358/56426319-vector-illustration-of-smiley-emoticon-sad-face.jpg'
                } 
                alt="" 
            />
            <h1>{messageToPlayer}</h1>
            <div className="d-flex col-4 justify-content-evenly">
                {
                    (curQuestion.rightAns !== answerId) ?
                    <Link to={`../../trivia/${questionId}`} className="btn btn-primary btn-lg">Try again</Link>
                    : null
                }
                <Link to={'../../trivia'} className="btn btn-primary btn-lg">Try a different question</Link>
            </div>
        </div>
        </>
    )
}

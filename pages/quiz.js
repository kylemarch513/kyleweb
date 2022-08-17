import { useEffect, useState } from "react";
import QuizButton from "../components/QuizButton";
import Layout from "../components/layout";
import ls from 'local-storage'
import Styles from "../components/quizzy.module.css";

export default function Quiz (){
    const [quizData, setQuizData] = useState(null)
    const [questionNum, setQuestionNum] = useState(0)
    const [score, setScore] = useState (0)
    const [quizzy, setQuizzy] = useState(false)
    const [highScore, setHighScore] = useState(ls.get("highscore"))
    const [quizLength, setQuizlength] = useState(5)
    const [menu, setMenu] = useState(false)
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=" + (quizLength+1) + category + difficulty)
        .then(res=>res.json())
        .then(data => setQuizData(data.results))
        if(!highScore){
            ls.set("highscore", 0)
        }
    },[quizzy])
    console.log("question number", questionNum, "quizlength", quizLength)
    useEffect(()=>{
        if(questionNum === parseInt(quizLength))
        {
            setQuizData(null)
            //console.log(quizData)
            setQuizzy(true)
        }
        if(score >= highScore){
            setHighScore(score)
            ls.set("highscore", score)
        }
    },[questionNum])
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    const resetGame = () => {
        setScore(0)
        setQuestionNum(0)
        setQuizzy(false)
    }
    const setLength = () => {
        setQuizlength(prompt("Enter a number"))
    }
    const openMenu = () => {
        setMenu(prevMenu => !prevMenu)
    }
    //target is always a string
    const handleClick = (e) => {
        //console.log('here we go:', e.target.value, typeof e.target.value)
        if(e.target.value === 'true'){
            //console.log("working")
            setScore(score + 1)
            setQuestionNum(questionNum + 1)
        } else {
            setQuestionNum(questionNum + 1)
        }
        }
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
        }

    if(quizData){
        const wrongAnswers = quizData[questionNum].incorrect_answers
        const answers = [
            {submition:quizData[questionNum].correct_answer, correct:true,},
            {submition:wrongAnswers[0], correct:false},
            {submition:wrongAnswers[1], correct:false},
            {submition:wrongAnswers[2], correct:false},
        ]
        const ranAnswers = shuffle(answers).filter(obj => obj.submition)
        const buttonElements = ranAnswers.map(({correct, submition})=> <QuizButton func={handleClick} value={correct} text={decodeHtml(submition)}/>)

        return(
            <div style={Styles}>
                <Layout/>
                {!quizzy && <div>
                    <h4>{decodeHtml(quizData[questionNum].question)}</h4>
                    <div className="buttonsquizzy">{buttonElements}</div>
                </div>}
                {quizzy && <div>
                    <h2>Quiz Over</h2>
                    <button onClick={resetGame}>Try Again?</button>
                    </div>}
                <p>CurrentScore: {score}/{quizLength}</p>
                <p>HighScore: {highScore}</p>
                {quizzy && <button onClick={openMenu}>{!menu ? "Open Settings" : "Close Settings"}</button>}
                {menu && <div>
                    <p>Testing</p>
                    <button onClick={setLength}>Choose Quiz Length</button>
                </div>}
            </div>
        )
    } else {
        return(
            <div>
                <Layout/>
            </div>            
        )
    }


}
// each question as own compenent
//buttons within
// add category state
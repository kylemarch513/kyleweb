import { useEffect, useState } from "react";
import QuizButton from "../components/QuizButton";
import Layout from "../components/layout";
import ls from 'local-storage'
import Styles from "../components/quizzy.module.css";
import loading from "../images/loading.jpeg"
import Image from "next/image";

export default function Quiz (){
    const [quizData, setQuizData] = useState(null)
    const [questionNum, setQuestionNum] = useState(0)
    const [score, setScore] = useState (0)
    const [quizzy, setQuizzy] = useState(true)
    const [highScore, setHighScore] = useState(ls.get("highscore"))
    const [quizLength, setQuizlength] = useState(5)
    const [menu, setMenu] = useState(false)
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [type, setType] = useState("")

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=" + (quizLength+1) + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
        .then(res=>res.json())
        .then(data => setQuizData(data.results))
        if(!highScore){
            ls.set("highscore", 0)
        }
    },[quizzy])
   
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
        setMenu(false)
        setScore(0)
        setQuestionNum(0)
        setQuizzy(false)
    }
    const setLength = (e) => {
        if(parseInt(e.target.value) < 1 || parseInt(e.target.value) > 30){
            setQuizlength(5)
        } else {
        setQuizlength(e.target.value)
        }
    }
    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    const changeDifficulty = (e) => {
        setDifficulty(e.target.value)
    }
    const changeType = (e) => {
        setType(e.target.value)
    }
    const openMenu = () => {
        setMenu(prevMenu => !prevMenu)
    }
    const fixError = () => {
        window.location.reload()
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

    if(quizData && quizData.length > 1){
        const wrongAnswers = quizData[questionNum].incorrect_answers
        const answers = [
            {submition:quizData[questionNum].correct_answer, correct:true,},
            {submition:wrongAnswers[0], correct:false},
            {submition:wrongAnswers[1], correct:false},
            {submition:wrongAnswers[2], correct:false},
        ]
        const ranAnswers = shuffle(answers).filter(obj => obj.submition)
        const buttonElements = ranAnswers.map(({correct, submition})=> <QuizButton func={handleClick} value={correct} text={decodeHtml(submition)} />)

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
                    <label>Quiz Length: </label>
                    <input type="number" onChange={setLength} min="1" max="30" placeholder="5"/>
                    <label>Category: </label>
                    <select onChange={changeCategory} name="trivia_category">
			            <option value="0">Any Category</option>
			            <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                    <p></p>
                    <label>Difficulty: </label>
                    <select onChange={changeDifficulty} name="trivia_difficulty">
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>                        
                    </select>
                    <label>Type: </label>
                    <select name="trivia_type" onChange={changeType}>
		                <option value="any">Any Type</option>
		                <option value="multiple">Multiple Choice</option>
		                <option value="boolean">True / False</option>
		            </select>
                </div>}
            </div>
        )
    } else if (quizData && quizData.length <= 0){
        return(
            <div>
                <Layout/>
                <h2>Oops there are no questions that meet those criteria.</h2>
                <button onClick={fixError}>Reset</button>
            </div>
        )
    } else {
        return(
            <div>
                <Layout/>
                <h2>Loading Trivia App...</h2>
                <Image src={loading} height="50%" width="50"/>
            </div>            
        )
    }


}
// each question as own compenent
//buttons within
// add category state
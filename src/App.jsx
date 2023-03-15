import React from "react"
import Start from "./Start"
import Quiz from "./Quiz"

import {nanoid} from "nanoid"
import {decode} from "he"

export default function App() {
    const [questionData, setQuestionData] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    const [answersChecked, setAnswersChecked] = React.useState(false)
    const [quizStarted, setQuizStarted] = React.useState(false)
    const [numberOfGames, setNumberOfGames] = React.useState(1)
    const [difficulty, setDifficulty] = React.useState("easy")

    const triviaData = []

    React.useEffect(() => {

        fetch(`https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&type=multiple`)
            .then(resp => resp.json())
            .then(data => {
                data.results.forEach(result => {

                    const answersData = []
    
                    result.incorrect_answers.forEach(incorrectAnswer => {
                        answersData.push({
                            answer: decode(incorrectAnswer),
                            selected: false,
                            answerId: nanoid(),
                            correctAnswer: false,
                        })
                    })
    
                    answersData.splice(Math.floor(Math.random() * (answersData.length + 1)), 0, {
                        answer: decode(result.correct_answer),
                        selected: false,
                        answerId: nanoid(),
                        correctAnswer: true,
                    })
    
                    triviaData.push(
                        {
                            question: decode(result.question),
                            questionId: nanoid(),
                            answers: answersData,
                        }
                )})
                setQuestionData(triviaData)
    
            })
    }, [numberOfGames, difficulty])
    
    function selectAnswer(questionId, answerId){
        if(!answersChecked){
            setQuestionData(prev => {
                const newQuestions = prev.map(questionSet => {
                    if(questionSet.questionId === questionId){
                        return (
                            {
                                ...questionSet,
                                answers: questionSet.answers.map(answer => answer.answerId === answerId ? {...answer, selected: true} : {...answer, selected: false})
                            }
                        )
                    }
                    else{
                        return questionSet
                    }
                })
                return newQuestions
            })
        }
    }
    
    function checkAnswers(){
        setCorrectAnswers(() => {
            const correctAnswersArray = []
            questionData.forEach(question => {
                question.answers.forEach(answer => {
                    if(answer.correctAnswer && answer.selected){
                        correctAnswersArray.push(answer)
                    }
                })
            })
            return correctAnswersArray.length
        })
        setAnswersChecked(true)
    }
    
    function playAgain(){
        setAnswersChecked(false)
        setCorrectAnswers(0)
        setQuizStarted(false)
        setNumberOfGames(prev => prev + 1)
    }

    function startQuiz(){
        setQuizStarted(true)
    }

    function handleChange(event){
        setDifficulty(event.target.value)
    }

    if(quizStarted){
        return(
            <Quiz 
                questionData={questionData}
                numberOfGames={numberOfGames}
                difficulty={difficulty}
                answersChecked={answersChecked}
                correctAnswers={correctAnswers}
                playAgain={playAgain}
                checkAnswers={checkAnswers}
                selectAnswer={selectAnswer}
            />
        )
    }
    else{
        return(
            <Start 
                startQuiz={startQuiz}
                difficulty={difficulty}
                numberOfGames={numberOfGames}
                handleChange={handleChange}
            />
        )
    }
}

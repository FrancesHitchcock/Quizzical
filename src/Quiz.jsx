import React from "react"
import QuestionSet from "./QuestionSet"
import PlayAgainButton from "./PlayAgainButton"
import CheckButton from "./CheckButton"
import Confetti from 'react-confetti'

import lemony from "./lemony.png"
import baby from "./baby.png"

const styles = {
    backgroundImage: `url(${lemony}), url(${baby})`
}

export default function Quiz(props){

    let buttonComponent
    if(props.answersChecked){
        buttonComponent = <PlayAgainButton 
            correctAnswers={props.correctAnswers}
            numOfQuestions={props.questionData.length}
            playAgain={props.playAgain}
        />
    }
    else{
        buttonComponent = <CheckButton 
            checkAnswers={props.checkAnswers}
        />
    }

    const questionSets = props.questionData.map(questionSet => <QuestionSet 
        key={questionSet.questionId} 
        question={questionSet.question}
        questionId={questionSet.questionId}
        answers={questionSet.answers} 
        selectAnswer={props.selectAnswer}
        answersChecked={props.answersChecked}
    />)

    return(
        <div className="wrapper quiz-wrapper" style={styles}>
            {props.correctAnswers === 5 && window.innerWidth > 800 && <Confetti />}
            <div className="header">
                <h2><span className="round">Round: {props.numberOfGames}</span> <span className="difficulty-level">Difficulty level: {props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}</span></h2>
            </div>
            {questionSets}
            {buttonComponent}
        </div>
    )
}
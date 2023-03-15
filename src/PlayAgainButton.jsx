import React from "react"

export default function PlayAgainButton(props){
    return (
        <div className="play-again-button-container button-container">
            <h5>You scored {props.correctAnswers}/{props.numOfQuestions} correct answers</h5>
            <button 
                className="play-again-button"
                onClick={props.playAgain}
            >Play again</button>
        </div>
    )
}


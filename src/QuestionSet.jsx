import React from "react"
import Answer from "./Answer"

export default function QuestionSet(props) {

    const answerSet = props.answers
    const selectedAnswers = answerSet.filter(answer => answer.selected)
    const answerSelected = selectedAnswers.length === 1 ? true : false
    
    const answers = props.answers.map(answer => <Answer 
        key={answer.answerId}
        answer={answer.answer}
        selected={answer.selected}
        answerId={answer.answerId}
        correctAnswer={answer.correctAnswer}
        answersChecked={props.answersChecked}
        selectAnswer={props.selectAnswer} 
        questionId={props.questionId}

        answerSelected={answerSelected}
    />)
    
    return(
        <div className="question-set">
            <h3 className="question">{props.question}</h3>
            <div className="answers-container">
                {answers}
            </div>
        </div>
    )
}
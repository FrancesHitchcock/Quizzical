import React from "react"

export default function Answer(props){
    
    function getBackgroundColor(){
        if(props.answersChecked && props.correctAnswer){
            return "#94D7A2" //green
        }
        else if(props.answersChecked && props.selected && !props.correctAnswer){
            return "#F8BCBC" //pink
        }
        else if(props.selected && !props.answersChecked){
            return "#D6DBF5" //grey
        }
        else if(!props.answerSelected && props.answersChecked && !props.correctAnswer){
            return "#F8BCBC" //pink
        }
        else{
            return "transparent"
        }
    }

    function getBorders(){
        if(!props.answersChecked && props.selected){
            return "1px solid #D6DBF5"
        }
        else if(props.answersChecked && props.correctAnswer){
            return "1px solid #94D7A2"
        }
        else{
            return "1px solid #4D5B9E"
        }
    }
    
    const styles = {
        backgroundColor: getBackgroundColor(),
        border: getBorders(),
        opacity: props.answersChecked && !props.correctAnswer ? .5 : 1
    }
    
    return(
        <div className="answer-container" style={styles} onClick={() => props.selectAnswer(props.questionId, props.answerId)}><h4>{props.answer}</h4></div>
    )
}


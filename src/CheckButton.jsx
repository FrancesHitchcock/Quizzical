import React from "react"

export default function CheckButton(props){
    return (
        <div className="check-button-container button-container">
            <button 
                className="check-button"
                onClick={props.checkAnswers}
            >Check answers</button>
        </div>
    )
}
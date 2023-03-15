import React from "react"

import lemony from "./lemony.png"
import baby from "./baby.png"

const styles = {
    backgroundImage: `url(${lemony}), url(${baby})`
}

export default function Start(props){
    return(
        <div className="wrapper start-wrapper" style={styles}>
            <h1>Quizzical</h1>
            <div className="select-container">
                <p>Choose difficulty level</p>
                <select 
                    className="select-box"
                    id="difficulty"
                    name="difficulty"
                    value={props.difficulty}
                    onChange={props.handleChange}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
                
            <button className="start-button" onClick={props.startQuiz}>{props.numberOfGames === 1 ? "Start quiz" : "Next round"}</button>
        </div>
    )
}
import React from 'react'
const Output = (props) => (
    <div className={props.ishidden + " output-container"}>
        <span className="equations">{props.equations}</span>
        <span className="output-string">{props.outputDisplay}</span>
        
    </div>
);
export default Output;
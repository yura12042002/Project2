import "./Title.css"
import React from 'react';
import { useState } from "react";

function Title () {
    let textInput = React.createRef()
    let textOut = React.createRef()
    let sizeInput = React.createRef()
    let textColor = React.createRef()
    const [output, setOutput] = useState()
    const [colorTextOut, setOutputColor] = useState()

    function inp () {
        textOut.current.innerHTML = textInput.current.value
        setOutput(sizeInput.current.value)
        setOutputColor(textColor.current.value)
    }

    return (
        <div>
            <div className="container">
                <input placeholder="Write a text" className="inputIn" ref={textInput}/>            
                <input placeholder="size" className="fontSize" ref={sizeInput}/>            
                <select className="selectColor" ref={textColor}>
                    <option>black</option>
                    <option>red</option>
                    <option>blue</option>
                </select>
                <button className="textButtun" onClick={inp}>Save</button> 
            </div>
            <p ref={textOut} className="textWithChange" style={{fontSize: Number(`${output}`), color: `${colorTextOut}`}}></p>
        </div>  
       
    )
}

export default Title
import React, { useState } from 'react'
import { titleCase } from 'title-case';

export default function Body(props) {
    const [text, setText] = useState("");
    const handelTheChange = (event) => {
        setText(event.target.value)
    }
    const convertToUppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const convertToLowercase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const convertToSentancecase = () => {
        let text2= text.toLowerCase()
        let newText = titleCase(text2)
        setText(newText)
    }
    const hardCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
    }
    const clearAll = () => {
        setText("")
    }


    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="form-group my-4">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handelTheChange}></textarea>
                </div>
                <button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={convertToUppercase}>Convert to Uppercase</button>
                <button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={convertToLowercase}>Convert to Lowercase</button>
                <button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={convertToSentancecase}>Convert to Sentance</button>
                <button disabled = {text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={hardCopy}>Copy</button>
                <button disabled = {text.length===0}type="button" className="btn btn-primary mx-1 my-1" onClick={clearAll}>Clear</button>
            </div>
            <div className='container'>
                <h2>Your text summery is here</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} charcters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
            </div>
        </>
    )
}

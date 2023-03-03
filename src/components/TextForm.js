import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text= "new Text"; // Wrong way to change the state
    //setText(" new Text");  // Correct Way to change the state
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn.btn-primary mx-2" onClick={handleUpClick} >Convert to upper case</button>
                <button className="btn.btn-primary mx-2" onClick={handleLowClick} >Convert to lower case</button>
            </div>
            <div className="container my-4">
                <h1>Your Text Here</h1>
                <p>{text.split(" ").length} Words and {text.length} Charecter</p>
            </div>
        </>
    )
}

import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    // text= "new Text"; // Wrong way to change the state
    //setText(" new Text");  // Correct Way to change the state
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn.btn-primary" onClick={handleUpClick}>Convert to upper case</button>
        </div>
    )
}

import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
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
                    <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading} </h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn.btn-primary mx-2" onClick={handleUpClick} >Convert to upper case</button>
                <button className="btn.btn-primary mx-2" onClick={handleLowClick} >Convert to lower case</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Here</h1>
                <p>{text.split(" ").length} Words and {text.length} Charecter</p>
            </div>
        </>
    )
}

import React, {useState} from 'react'

export default function (props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to LowerCase", "success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleDoubleClick = ()=>{
        let newText = text.concat(text);
        setText(newText);
        props.showAlert("Text Multiplied", "success");
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    const handleSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{
        color: props.mode==='dark'?'white':'#042743'
    }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                backgroundColor: props.mode==='dark'?'#042743':'white',
                color: props.mode==='dark'?'white':'#042743'
            }} id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleDoubleClick}>Double the Text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleSpaceClick}>Remove Extra Spaces</button>
    </div>
    <div className="className my-3" style={{
        color: props.mode==='dark'?'white':'#042743'
    }}>
        <h2>Your Text Summary:</h2>
        <p>The text contains {text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>An average human can read the above text in: {0.48 * text.split(" ").length} seconds</p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Type Something in the box above for the Preview"}</p>
    </div>
    </>
  )
}

import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState('enter text here');
    //text = "new text"; // wrong way to change the state
    //setText=("new text"); // correct way to change text

    const handleUpClick = ()=>{
      console.log("uppercase was clicked");
      setText("you have clicked on HandleUpClick"+ text);
      let newText = text.toUpperCase();

    }

    const handleOnChange = (event)=>{
        console.log("On changed");
        setText(event.target.value)
      }
  


    return (
        <div>
           <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text } id="myBox" onChange={handleOnChange} rows="8"></textarea>
            </div>

            <div className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</div>
        </div>
    )
}

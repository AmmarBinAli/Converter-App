import React, {useState} from "react";

export default function TextFarm(props) {
    const [text, setText] = useState ('');

    const ConverterUp = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
    }

    const ConverterLow = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
    }

    const Remover = ()=>{
      let newText = "";
      setText(newText);
    }

    const onChangeHandler = (event)=>{
      setText(event.target.value);
  }

  return (
    <>
    <div className="container">
    <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} placeholder="Enter Your text Here" onChange={onChangeHandler}  id="myBox"  rows="8">
          </textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={ConverterUp}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-3" onClick={ConverterLow}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={Remover}>Remover</button>

    </div>

    <div className="caontainer">
      <h2>Text Summery</h2>
      <p><b>{text.split(" ").length} </b>Words and <b> {text.length}</b> Charactor </p>
      <h5>Speaking Time : </h5><b>{0.05*text.split("").length} sec</b>
      <h5>reading Time : </h5><b>{0.035*text.split("").length} sec</b>
      <h2>Preview </h2>
      <p>{text}</p>
    
    </div>

    </>
  );
}

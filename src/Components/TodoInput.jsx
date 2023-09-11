import React, { useState } from "react";
import "./todoinput.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleClick = () =>{
    props.addList(inputText);
    setInputText("");
  }

  return (
    <div className="input-container">
      <input
        value={inputText}
        type="text"
        className="input"
        placeholder="Enter your task"
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button className="add-btn" type="submit" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default TodoInput;

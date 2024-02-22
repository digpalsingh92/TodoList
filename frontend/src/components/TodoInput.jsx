import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const TodoInput = () => {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    // addList(inputText);
    // setInputText("");
    axios
      .post("http://localhost:5000/add", { inputText: inputText })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex mt-2 justify-center mb-2.5">
      <input
        value={inputText}
        type="text"
        className="pl-2.5 border-none w-[300px] rounded-lg text-lg font-bold"
        placeholder="Enter your task"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="w-24 h-10 rounded font-semibold bg-[#e82a2a] ml-2.5 text-lg cursor-pointer shadow-[0_5px_10px rgba(0,0,0,0.4)] border-none transition-[0.3s]"
        type="submit"
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;

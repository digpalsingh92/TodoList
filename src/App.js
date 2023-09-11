import { useState } from 'react';
import './App.css';
import TodoInput from "./Components/TodoInput";
import TodoList from './Components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText)=>{
    if(inputText!== '')
    setListTodo([...listTodo, inputText]);
  }

  const deleteItem = (Key) => { 
    let newListTodo = [...listTodo];
    newListTodo.splice(Key, 1)
    setListTodo([...newListTodo]);
  }
  return (
    <div className="container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h2 style={{color :"white", margin : 15}}>TODO's</h2>
        <hr/>
        {listTodo.map((listItem, i) => {
          return (
             <TodoList key= {i} index = {i} items = {listItem} deleteItem = {deleteItem}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;

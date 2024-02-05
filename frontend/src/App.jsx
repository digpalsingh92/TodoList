import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteItem = (Key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(Key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="items-center justify-center flex h-[100vh]">
      <div className="h-[500px] w-[500px] bg-[#345] rounded-xl">
        <TodoInput addList={addList} />
        <h2 style={{ color: "white", margin: 15 }}>TODOs</h2>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              items={listItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

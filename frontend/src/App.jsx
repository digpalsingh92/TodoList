import { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todo")
      .then((result) => setListTodo(result.data))
      .catch((err) => console.log(err));
  }, []);

  // const deleteItem = (Key) => {
  //   let newListTodo = [...listTodo];
  //   newListTodo.splice(Key, 1);
  //   setListTodo([...newListTodo]);
  // };
  return (
    <div className="items-center justify-center flex h-[100vh]">
      <div className="h-[500px] w-[500px] bg-[#345] rounded-xl">
        <TodoInput />
        <h2
          style={{ color: "white", margin: 15 }}
          className="text-xl font-bold"
        >
          TODOs
        </h2>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              // index={i}
              items={listItem.inputText}
              // deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

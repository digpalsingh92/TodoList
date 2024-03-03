import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todo");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refreshTodos();
  }, []);


  return (
    <div className="items-center justify-center flex h-[100vh]">
      <div className="h-[500px] w-[500px] bg-[#345] rounded-xl">
        <TodoInput refreshTodos={refreshTodos} />
        <h2
          style={{ color: "white", margin: 15 }}
          className="text-xl font-bold"
        >
          TODOs
        </h2>
        <hr />
        <TodoList items={todos} refreshTodos={refreshTodos} />
      </div>
    </div>
  );
};

export default App;

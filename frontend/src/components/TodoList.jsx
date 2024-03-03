import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ items, refreshTodos }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(items);
  }, [items]);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/${id}`);
      refreshTodos(); // Refresh todos after deletion
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ margin: "15px" }}>
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="flex justify-between"
          style={{ border: "3px solid green", padding: "8px", marginBottom: "5px", borderRadius: "5px" }}
        >
          {todo.inputText}
          <span onClick={() => deleteTodo(todo._id)} style={{ cursor: 'pointer' }}>
            <FaTrashAlt />
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

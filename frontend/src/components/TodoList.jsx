/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ items, deleteItem, index }) => {
  return (
    <div className=" self-center mt-2 list-none border-2 border-solid border-[#00d5ff] w-[80%] h-10 px-2.5 flex relative items-center text-white">
      {items}
      <span className="absolute right-2.5 mb-4 cursor-pointer hover:text-red-600">
        <FaTrashAlt
          onClick={(e) => {
            deleteItem(index);
          }}
        />
      </span>
    </div>
  );
};

export default TodoList;

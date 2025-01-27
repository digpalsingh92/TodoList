import { FaSearch } from "react-icons/fa";

export default function MainHomePage() {
  return (
    <div className="flex-2 container h-[100vh]">
      <div className="">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col p-4 gap-1 pt-6">
          <span className="text-2xl ml-6 font-semibold">Hello, Digpal</span>
          <span className="text-slate-400 ml-6">Today is Monday, 27 January 2025</span>
        </div>
        <div className="flex flex-row p-4 items-center gap-6 pt-6">
          <span className="text-2xl font-semibold"><FaSearch/></span>
          <button className="bg-gray-600 h-12 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Add New Task</button>
        </div>
      </div>
      <div></div>
      </div>
    </div>
  )
}
import { useState } from "react"
import Footer from "./components/Footer";

function App() {
  const[task, setTask]= useState("")
  const[list, setList]= useState([])

  function Add() {
    setList([...list, task]);
    setTask("");
  };
  
  function Remove(index){
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  function Clear(){
    const clearedList = [];
    setList(clearedList);
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-80 bg-green-100 rounded-lg shadow-xl px-10 py-9">
        <p className="text-2xl font-bold pb-5 text-center">TO-DO List</p>
        
        <input 
        className="bg-white my-3 py-2 px-2 rounded-md text-center text-l w-full" 
        name="task"
        value={task}
        placeholder="Enter Task"
        onChange={(e) => (setTask(e.target.value))}
        />

        {/* Buttons */}
        <div className=" mt-2 grid grid-cols-2 gap-6">
        <button 
        className="px-3 py-2 rounded hover:text-white bg-amber-400 "
        onClick={Add}
        >
        Add Task
        </button>

        <button
        className="px-3 py-2 rounded hover:text-white bg-amber-400 "
        onClick={() => Clear()}
        >
          Clear All
        </button>
        </div>

        <ul className="mt-4 bg-white w-full rounded-md shadow-inner ">
          {list.map(
            (t,index) => (
            <li 
            className="flex justify-between items-center py-2 px-3 border-b"
            key={index}>
              {t}
            <button 
            className=" px-3 py-1 rounded text-red-500 hover:bg-red-500 hover:text-black"
            onClick= {() => Remove(index)}
            >
              X
            </button>
            </li>
            )
          )}
        </ul>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App





"use client";
import { addtodo,deletTodo } from "@/redux/todoSlice";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function todoIn() {
  // useSelectou
  const todoValue = useSelector((state) => state.todo.value);

  const [text, setText] = useState("");
  const input = (e) => {
    setText(e.target.value);
  };
  // useDispatch
  const dispatch = useDispatch();
  // add button
  const addBtn = (e) => {
    e.preventDefault();
    if (text == "") {
      toast.error("Enter any message");
    } else {
      toast.success("Todos added");
      dispatch(
        addtodo({
          id: Math.random(),
          text: text,
        })
      )
    }
    setText("");
  }

  return (
    <main>
      {/* input */}
      <div className="w-full flex flex-col justify-center mb-10">
        <h2 className="text-4xl font-semibold my-10 text-center">Our Todo</h2>
        <div className="flex  gap-5 bg-green-200 w-1/3 m-auto p-3">
          <input
            onChange={input}
            value={text}
            className="h-14 w-full ps-2"
            type="text"
          />
          <button onClick={addBtn} className="h-14 w-20 rounded-lg bg-green-500">
            ADD
          </button>
        </div>
      </div>

      {/* output */}
      <div className="flex flex-col">
        {/* item-1 */}
        {
              todoValue.length > 0 ? 
              (todoValue.map((todo)=>(<div className="bg-yellow-200 w-1/3 flex justify-between m-auto my-2 p-4 ">
              <p key={todo.id} className="m-aoto">{todo.text}</p>
              <span onClick={()=>dispatch(deletTodo(todo.id))} className="text-red-600 bg-red-200 p-2 cursor-pointer">
                Remove
              </span>
            </div>))) 
              : (<p></p>)
            }
      </div>
      <Toaster position="bottom-left"/>
    </main>
  );
}

export default todoIn;

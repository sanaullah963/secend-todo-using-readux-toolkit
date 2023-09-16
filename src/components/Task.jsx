'use client'
import React from 'react'
import { deletTodo } from '@/redux/todoSlice';
import { useSelector,useDispatch } from 'react-redux'
function Task() {
  // useSelector
  const todoValue = useSelector((state)=>state.todo.value);
  // useDispatch
  const dispatch = useDispatch();
  return (
    <main>
      <div>
        <h2 className='text-center font-semibold text-amber-950 my-5'>Our all todo list</h2>
      </div>
      <div className='flex flex-col'>
        {
          todoValue.length > 0 ?
          (todoValue.map((todo)=>(
            <div className="bg-yellow-200 w-1/3 flex justify-between m-auto my-2 p-4 ">
              <p key={todo.id} className="m-aoto">{todo.text}</p>
              <span onClick={()=>dispatch(deletTodo(todo.id))} className="text-red-600 bg-red-200 p-2 cursor-pointer">
                Remove
              </span>
            </div>
          )))
          :
          (<p></p>)
        }
      </div>
    </main>
  )
}

export default Task
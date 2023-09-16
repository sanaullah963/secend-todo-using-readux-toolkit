
import { createSlice } from "@reduxjs/toolkit";

// initial value
const initialState = {
  value : [],
}
// reducer
export const todoSlice = createSlice ({
  name : 'todo',
  initialState,
  reducers : {
    addtodo : (state,action)=>{
     const existingTodo = state.value.map((todo)=>todo.id===action.payload.id);
      if(existingTodo){
        state.value.push(action.payload);
      }else{
        state.value = action.payload;
      } 
    },
    deletTodo : (state,action)=>{
      state.value=state.value.filter((item)=>item.id !== action.payload);
    }
  }
});

// export function
export const {addtodo}=todoSlice.actions;
export const {deletTodo}=todoSlice.actions;
export default todoSlice.reducer;
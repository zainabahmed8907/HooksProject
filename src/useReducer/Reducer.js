import React, { useReducer, useState } from 'react'

import Todo from './Todo'

export const ACTIONS={
    ADD_TODO:'add-todo',
  
    DELETE_TODO:'delete-todo'
}

function reducer(todos,action)
{
  switch(action.type)
  {
      case ACTIONS.ADD_TODO:
          return[...todos,newTodo(action.payload.name) ]
     
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo=>todo.id!==action.payload.id);
    default:
        return todos

  }
}
function newTodo(name)
{
  return {id:Date.now(),name:name,complete:false}
}
export default function Reducer() {
    const[todos,dispatch]=useReducer(reducer,[]);
    const [name,setName]=useState('');
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
        setName('');
    }
    return (
        <div>
           <form >
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
  <button onClick={handleSubmit} >ADD</button>
    {todos.map(todo=>{
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        
    })}
    
           </form>
        </div>
    )
}

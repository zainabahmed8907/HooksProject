import React from 'react'
import {ACTIONS} from './Reducer'
export default function Todo({todo,dispatch}) {
    return (
        <div>
            <span style={{color:todo.complete?'red':'black'}}>{todo.name}</span>
         
            <button  onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>DELETE_TODO</button>
        </div>
    )
}

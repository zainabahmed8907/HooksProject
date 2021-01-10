import React from 'react'
import {ACTIONS} from './MovieReducer'
export default function Movie({movie,dispatch}) {
    return (
        <div>
            <span style={{color:movie.watch?'blue':'red'}}>{movie.name}</span>
            <button onClick={()=>{dispatch({type:ACTIONS.DELETE_MOVIE,payload:{id:movie.id}})}}>Delete</button>
        </div>
    )
}

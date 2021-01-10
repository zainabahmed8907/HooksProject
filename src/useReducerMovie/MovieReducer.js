import React, { useState ,useReducer} from 'react'

import Movie from './Movie'
export const ACTIONS={
    ADD_MOVIE:'ADD-MOVIE',
    DELETE_MOVIE:'DELETE-MOVIE'
}
function reducer(movies,action)
{
    switch(action.type)
    {
      case(ACTIONS.ADD_MOVIE):
        return [...movies,newMovie(action.payload.movieName)]
     case (ACTIONS.DELETE_MOVIE):
         return movies.filter(movie=>movie.id!==action.payload.id)
        default:
            return movies;

    }
}

function newMovie(name)
{
    return {id:Date.now(),name:name,watch:false}
}

export default function MovieReducer() {
    const [movies,dispatch]=useReducer(reducer,[]);
    const [movieName,setMovieName]=useState('');
    const submit=(e)=>{
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_MOVIE,payload:{movieName:movieName}});
        setMovieName('')
    }
    return (
        <div>
            <form>
                <input type="text" value={movieName} onChange={e=>setMovieName(e.target.value)}/>
                <button onClick={submit}>ADD MOVIE</button>
                {movies.map(movie=>{return <Movie key={movie.id} movie={movie} dispatch={dispatch}/>})}
            </form>
        </div>
    )
}

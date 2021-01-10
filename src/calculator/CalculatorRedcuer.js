import React,{useState,useReducer} from 'react'




/*const ACITONS={
    ADD:'add',
    SUBTRACT:'subtract',
    MULTIPLY:'multiply',
    DIVIDE:'divide'
}

function reducer(value,action)
{
    switch(action.type)
    {
     case ACITONS.ADD:
         return [...value,]
    }
}*/
function CalculatorRedcuer() {
   const [value,setValue]=useState('');
   const [plus,setPlus]=useState('+');
   const [minus,setMinus]=useState('-');
   const [divide,setDivide]=useState('/');
   const [multiply,setMultiply]=useState('*')



    return (
        <div>

        <form>
        <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
   
       
        <button value={plus} onClick={(e)=>setPlus(e.target.value)} >+</button>
        <button type="button" value={minus} onChange={(e)=>setMinus(e.target.value)}></button>
        <button type="button" value={multiply} onChange={(e)=>setMultiply(e.target.value)} ></button>
<button type='button' value={divide} onChange={(e)=>setDivide(e.target.value)} ></button>
        </form>
            
        </div>
    )
}

export default CalculatorRedcuer

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Reducer from './useReducer/Reducer'
import MovieReducer from './useReducerMovie/MovieReducer';
import CalculatorRedcuer from './calculator/CalculatorRedcuer'

function App() {
  return (
    <div className="App">
     
<CalculatorRedcuer/>
    </div>
  );
}

export default App;

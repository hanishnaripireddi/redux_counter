
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {
  decrement,
  increment,
  reset
} from "./actions"

function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="App">
      <div>
        <button onClick={handleIncrement}>+</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <button onClick={handleShow}>Show</button>
      </div>
      {show && <h1>hello</h1>}
    </div>
  );
}

export default App;

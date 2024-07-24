
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [clicked, setClicked] = useState(0);
  
  function incrementCounter() {
    setClicked(clicked+1);
  }

  return (
    <div>
      <p>Button clicked {clicked} times</p>
      <button onClick={incrementCounter}>Click me</button>
      {/* Arbaj Ansari
        Do not remove the main div */}
    </div>
  )
}

export default App

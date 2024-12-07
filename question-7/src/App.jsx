import { useState } from "react";
import "./App.css";

function App() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="">
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      <p style={{ display: `${showText ? "block" : "none"}` }}>
        Text to be toggle!
      </p>
    </div>
  );
}

export default App;

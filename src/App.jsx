import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("Greeting Message");
  const [greetingInputMsg, setGreetingInputMsg] = useState("");

  const updateGreetingMsg = () => {
    setGreetingMsg(greetingInputMsg);
  };

  const handleGreetingInput = (e) => {
    setGreetingInputMsg(e.target.value);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetingInputMsg}
          onChange={handleGreetingInput}
        />
      </div>

      <div className="buttons">
        <button onClick={updateGreetingMsg}>Update text</button>
      </div>
    </div>
  );
}

export default App;

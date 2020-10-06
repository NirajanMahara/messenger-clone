import React, { useState } from "react";

import "./App.css";

function App() {
  const [state, setstate] = useState("");
  const [messages, setMessages] = useState(["hey"]);

  console.log(state);
  console.log(messages);

  const inputHandler = (e) => {
    setstate(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    //copy all the existing messages and new one.
    setMessages([...messages, state]);

    //reset input field after clicking button
    setstate("");
  };
  return (
    <>
      <form>
        <input value={state} onChange={inputHandler}></input>
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>

      {messages.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}

export default App;

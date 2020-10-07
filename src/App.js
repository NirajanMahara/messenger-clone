import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

import "./App.css";

function App() {
  const [state, setstate] = useState("");
  const [messages, setMessages] = useState(["hey"]);
  const [username, setUserName] = useState("");

  useEffect(() => {
    const name = prompt("Please enter your name");
    setUserName(name);
  }, []);

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
    <div className="App">
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter your message</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={state}
            onChange={inputHandler}
          />
          <Button
            // disable when input field is empty
            disabled={!state}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      <p>Welcome {username}</p>

      {messages.map((item) => (
        <Message text={item} />
      ))}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import Message from "./Message";

import Form from "./components/Form";

import "./App.css";

function App() {
  const [state, setstate] = useState("");
  const [messages, setMessages] = useState([
    { username: "Ufuk", text: "how are you?" },
    { username: "Elif", text: "I am mad at you!" },
  ]);
  const [username, setUserName] = useState("");

  const uniqueName = ["Ufuk", "Elif"];

  useEffect(() => {
    const name = prompt("Please enter your name");
    const styledName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(styledName);

    if (styledName.length < 1) {
      alert("Name can not be blank");
      window.location.reload();
    } else {
      if (uniqueName.includes(styledName)) {
        alert("Name have to unique. Please choose another name");
        window.location.reload();
      } else {
        setUserName(styledName);
        uniqueName.push(styledName);
      }
    }
  }, []);

  const inputHandler = (e) => {
    setstate(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    //copy all the existing messages and new one.
    setMessages([...messages, { username: username, text: state }]);

    //reset input field after clicking button
    setstate("");
  };
  return (
    <div className="App center-items">
      <p>Welcome {username}</p>

      {messages.map((item, i) => (
        <Message key={i} username={username} text={item} />
      ))}
      <Form
        state={state}
        inputHandler={inputHandler}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;

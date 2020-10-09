import React, { useState, useEffect } from "react";

import Message from "./Message";

import firebase from "./firebase";

import Form from "./components/Form";

import "./App.css";

function App() {
  const [state, setstate] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  const uniqueName = ["Ufuk", "Elif"];

  useEffect(() => {
    const downloadMessage = firebase.database().ref("Messages");
    downloadMessage.on("value", (snapshot) => {
      const allMessages = Object.values(snapshot.val());

      allMessages.map((item) =>
        setMessages((prevState) => [...prevState, item])
      );
    });
  }, []);

  useEffect(() => {
    const name = prompt("Please enter your name");
    if (name === null) {
      alert("You are not allowed to see without login");
      window.location.reload();
    }
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
  const onKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      sendMessage();
    }
  };

  const inputHandler = (e) => {
    setstate(e.target.value);
  };

  const sendMessage = (e) => {
    const uploadMessage = firebase.database().ref("Messages");
    const messageTo = { username: username, text: state };
    uploadMessage.push(messageTo);
    setMessages([...messages, { username: username, text: state }]);

    //reset input field after clicking button
    setstate("");
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className="App center-items">
      <h1 className="welcome-text">Welcome {username}</h1>

      {messages.map((item, i) => (
        <Message key={i} username={username} text={item} />
      ))}
      <Form
        state={state}
        inputHandler={inputHandler}
        sendMessage={sendMessage}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default App;

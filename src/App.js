import React, { useState, useEffect } from "react";

import Message from "./Message";

import firebase from "./firebase";

import Form from "./components/Form";

import "./App.css";

function App() {
  const [state, setstate] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");

  // the name must be unique
  const uniqueName = [];

  useEffect(() => {
    // Retrieve records data in the database
    const downloadMessage = firebase.database().ref("Messages");
    downloadMessage.on("value", (snapshot) => {
      const allMessages = snapshot.val();
      const messageList = [];
      for (let id in allMessages) {
        messageList.push({ id, ...allMessages[id] });
      }

      setMessages(messageList);
    });
  }, []);

  useEffect(() => {
    const name = prompt("Please enter your name");

    //if the user hits cancel
    if (name === null) {
      alert("You are not allowed to view without login");
      window.location.reload();
    }
    // get the name and convert it to stylized format
    const styledName = name.charAt(0).toUpperCase() + name.slice(1);

    //check whether the user has entered a name
    if (styledName.length < 1) {
      alert("Name can not be blank");
      window.location.reload();
    } else {
      if (uniqueName.includes(styledName)) {
        alert("The name must be unique. Please choose another name");
        window.location.reload();
      } else {
        //If the name is unique, add it to the name list
        setUserName(styledName);
        uniqueName.push(styledName);
      }
    }
  }, []);

  //message should be sent if user presses 'enter' key
  const onKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      sendMessage();
    }
  };

  //capture text typed by the user
  const inputHandler = (e) => {
    setstate(e.target.value);
  };

  const deleteMessageHandler = (id) => {
    const deleteMessage = firebase.database().ref("Messages").child(id);
    deleteMessage.remove();
  };

  const sendMessage = (e) => {
    // add all messages written by all users to database
    const uploadMessage = firebase.database().ref("Messages");
    const messageTo = { username: username, text: state };
    uploadMessage.push(messageTo);

    //add all messages written by all users to text field
    /* setMessages([...messages, { username: username, text: state }]); */

    //reset input field after clicking button
    setstate("");

    //add auto-scroll so the page focus automatically focuses on recent posts
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="App center-items">
      <h1 className="welcome-text">Welcome {username}</h1>

      {messages.map((item) => (
        <Message
          key={item.id}
          username={username}
          text={item}
          deleteMessageHandler={deleteMessageHandler}
        />
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

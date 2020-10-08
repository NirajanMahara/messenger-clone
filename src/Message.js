import React from "react";

export default function Message({ text, username }) {
  // check who writes message
  const isUser = username === text.username;
  const styleForName = isUser ? "own" : "guest";

  //add style according to user like className={`message ${isUser && "messagge_user"}`}
  return (
    <div className={`message-user-${styleForName}`}>
      <p className="message-user"> {text.username}</p>
      <p className="message-text">{text.text}</p>
    </div>
  );
}

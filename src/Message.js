import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default function Message({ text, username, deleteMessageHandler }) {
  // check who writes message

  const isUser = username === text.username;
  const styleForName = isUser ? "own" : "guest";

  const handleClick = () => {
    deleteMessageHandler(text.id);
  };

  //add style according to user like className={`message ${isUser && "messagge_user"}`}
  return (
    <div className={`message-user-${styleForName}`}>
      <p className={`message-username-${styleForName}`}> {text.username}</p>

      <p className={`message-text-${styleForName}`}>
        {text.text}
        <span className={`remove-message-${styleForName}`}>
          <AiFillDelete
            onClick={handleClick}
            size={25}
            style={{ backgroundColor: "rgb(224, 68, 6)" }}
          />
        </span>
      </p>
    </div>
  );
}

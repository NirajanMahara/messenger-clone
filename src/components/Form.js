import React from "react";

function Form({ state, sendMessage, inputHandler, onKeyPress }) {
  return (
    <form className="form-send-message center-items fixed-bottom w-50">
      <div className="row mt-2">
        <div className="col-9 form-input">
          <input
            type="text"
            id="message"
            name="message"
            value={state}
            onKeyPress={onKeyPress}
            placeholder="Please enter your message"
            onChange={inputHandler}
            className="form-control "
          ></input>
        </div>
        <div className="col-1 form-button">
          <button
            type="button"
            onClick={sendMessage}
            disabled={!state}
            className="btn btn-info"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

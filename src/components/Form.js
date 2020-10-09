import React from "react";

function Form({ state, sendMessage, inputHandler, onKeyPress }) {
  return (
    <div className="row">
      <div className="col-12 fixed-bottom">
        <form className="form-send-message center-items">
          <div className="row">
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
      </div>
    </div>
  );
}

export default Form;

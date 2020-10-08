import React from "react";
import { AiOutlineUpload } from "react-icons/ai";

function Form({ state, sendMessage, inputHandler }) {
  return (
    <div className="row">
      <div className="col-12 fixed-bottom">
        <form className="form-send-message center-items">
          <div className="row">
            <div className="col-1 pr-1 ">
              <AiOutlineUpload size={32} />
            </div>
            <div className="col-9 form-input">
              <input
                type="text"
                id="message"
                name="message"
                value={state}
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

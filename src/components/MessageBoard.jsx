import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(inputMessage);
    setMessage(newMessage);
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form>
        <div className="message-input-container">
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              onChange={handleMessageChange}
              value={inputMessage}
            />
          </label>
          <button className="submit-message-button" onClick={addMessage}>
            Submit
          </button>
        </div>
        <div className="board">
          <div className="message">
            <ul className="message-list">
              {message.map((item, index) => {
                return (
                  <li>
                    {item}{" "}
                    <button
                      className="delete-button"
                      onClick={() => {
                        deleteMessage(index);
                      }}
                    >
                      x
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MessageBoard;

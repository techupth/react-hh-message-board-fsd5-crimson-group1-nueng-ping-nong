import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([
    "Hello all ! This is first message.",
  ]);

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  };

  const addMessage = () => {
    const newMessageList = [...messageList];
    newMessageList.push(messageInput);
    setMessageList(newMessageList);
  };

  const removeMessage = (messageListIndex) => {
    const newMessageList = [...messageList];
    newMessageList.splice(messageListIndex, 1);
    setMessageList(newMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={handleMessageChange}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>

      <div class="board">
        {messageList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  removeMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;

import React, { useState } from 'react';
// import './PopupChat.css';

const PopupChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    // Logic to send the message to the server or perform any desired actions
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className={`popup-chat ${isOpen ? 'open' : ''}`}>
        <div className='d-flex align-items-center'>
      {!isOpen && <button className="chat-toggle p-2" onClick={toggleChat}>
       
       {/* fa chat icon */}
       <i className="fas fa-comment-dots fa-2x"></i>
      </button>}
        </div>
      {isOpen && (
        // card
        <div className="card">
            <div className="card-header">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">Chat</h5>
                    {/* bootstrap x button on the right aligned that toggleschat */}
                    <button className="btn-close ms-auto" onClick={toggleChat}></button>
                </div>  
            </div>
            <div className="card-body">
                <div className="container">
                    <div className="chat-container">
                        <div className="chat-messages">
                            {messages.map((message, index) => (
                            <div key={index} className="message">
                                You: {message}
                            </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="chat-input">
  <div className="input-container">
    <input
      type="text"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      placeholder="Type your message..."
    />
  </div>
  <button onClick={handleSendMessage}>Send</button>
</div>

                </div>
            </div>
      </div>
      )}
    </div>
  );
};

export default PopupChat;

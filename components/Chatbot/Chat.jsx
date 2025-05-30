import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatLoader from './ChatLoader';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const addMessage = async (message) => {
    // Immediately add the user message
    setMessages((prev) => [...prev, message]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message.text }),  
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.message };

      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
  };

  return (
    <div className="chat-container bg-white mx-5 rounded-lg shadow-lg fixed bottom-4 right-4 w-90 h-96 px-4 mb-25">
      <div className="messages h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {loading && <ChatLoader />}
      </div>
      <ChatInput addMessage={addMessage} setLoading={setLoading} />
    </div>
  );
};

export default Chat;

import { useState } from 'react';

const ChatInput = ({ addMessage, setLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // ADDING USERS MESSAGE
    const userMessage = { sender: 'user', text: input };
    addMessage(userMessage);  
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),  
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.message };

      addMessage(botMessage);  
    } catch (error) {
      console.error('Error fetching bot reply:', error);
      addMessage({ sender: 'bot', text: "Oops! I couldn't respond." });
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="relative flex items-center border justify-between w-full rounded-lg px-2">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 border-none px-3 py-2 focus:outline-none"
        />
        <button 
          type="submit" 
          className="bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center ml-auto mt-1"
        >
          <img 
            src="/images/ArrowRightWhite.svg" 
            alt="Send" 
            className="w-4 h-4"
          />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;

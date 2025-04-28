const ChatMessage = ({ message }) => {
    // Check if message has the right properties
    const isUser = message.role === 'user';
  
    return (
      <div className={`mb-2 p-2 rounded ${isUser ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
        {/* Use the correct field here */}
        {message.text || message.content}
      </div>
    );
  };
  
  export default ChatMessage;
  
  
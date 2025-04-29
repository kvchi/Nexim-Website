const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';
  
    return (
      <div className={`mb-2 p-2 rounded max-w-xs break-words ${isUser ? 'bg-blue-100 text-right ml-auto' : 'bg-gray-200 text-left mr-auto'}`}>
        {message.text}
      </div>
    );
  };
  
  export default ChatMessage;
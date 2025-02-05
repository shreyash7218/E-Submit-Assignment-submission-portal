import React, { useState } from 'react';

// Mock chatbot responses
const botResponses = {
  'hello': 'Hi there! How can I help you today?',
  'help': 'I can help you with programming concepts, assignment guidelines, and general course information. What would you like to know?',
  'c++': 'C++ is a powerful programming language that supports object-oriented programming. What specific aspect would you like to learn about?',
  'java': 'Java is a popular object-oriented programming language. What would you like to know about Java?',
  'assignment': 'You can find your assignments in the dashboard. Each assignment has clear instructions and submission guidelines.',
  'deadline': 'Assignment deadlines are displayed on your dashboard. Make sure to submit before the due date!',
  'default': 'I\'m not sure about that. Could you please rephrase your question or ask something else?'
};

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I\'m your learning assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: 'user', text: input };
    
    // Generate bot response
    const lowercaseInput = input.toLowerCase();
    let botResponse = botResponses.default;
    
    // Check for keywords in the input
    Object.keys(botResponses).forEach(key => {
      if (lowercaseInput.includes(key)) {
        botResponse = botResponses[key];
      }
    });

    const botMessage = { sender: 'bot', text: botResponse };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Learning Assistant</h2>
      
      <div className="h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-field flex-1"
            placeholder="Type your message..."
          />
          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
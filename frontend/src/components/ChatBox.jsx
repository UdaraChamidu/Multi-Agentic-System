import React, { useState } from "react";
import { postTask } from "../services/api";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input) return;
    const userMsg = { sender: "User", text: input };
    setMessages([...messages, userMsg]);

    const res = await postTask({ task: input });
    const agentMsg = { sender: "Agent", text: JSON.stringify(res) };
    setMessages((prev) => [...prev, agentMsg]);
    setInput("");
  };

  return (
    <div>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <b>{msg.sender}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBox;

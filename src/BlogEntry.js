import { useState } from "react";

export default function BlogEntry({ setMessages }) {
  const [message, setMessage] = useState("");

  const addPost = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/messages/new", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setMessages(data);
    setMessage("");
  };

  return (
    <form onSubmit={addPost}>
      <input
        autoFocus
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button disabled={!message}>Blog It!</button>
    </form>
  );
}

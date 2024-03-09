import { createRoot } from "react-dom/client";
import { useState } from "react";
import Microblog from "./Microblog";
import { useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/messages");
    const data = await response.json();
    setMessages(data);
  };

  // only call this once when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Welcome, microbloggers!</h1>
      <Microblog messages={messages} />
    </>
  );
}

// React 18 API for creating a root
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

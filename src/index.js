import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import Microblog from "./Microblog";
import BlogEntry from "./BlogEntry";

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
    <main>
      <h1>Welcome, microbloggers!</h1>
      <Microblog messages={messages} />
      <BlogEntry setMessages={setMessages} />
    </main>
  );
}

// React 18 API for creating a root
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

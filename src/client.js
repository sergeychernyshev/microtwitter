import ReactDOM from "react-dom";
import Microblog from "./Microblog";

// fetch("/api/messages").then((response) => {
//   response.json().then((messages) => {
//     console.log(messages);
//   });
// });

function App() {
  const messages = [
    {
      id: 1,
      text: "Hello World",
    },
    {
      id: 2,
      text: "Another message",
    },
  ];

  return (
    <>
      <h1>Welcome, microbloggers!</h1>
      <Microblog messages={messages} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default function Microblog({ messages }) {
  return (
    <>
      {messages.map((message) => (
        <section key={message.id}>{message.text}</section>
      ))}
    </>
  );
}

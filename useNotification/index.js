export default function App() {
  const triggerNotification = useNotification("Can I eat beer?", {
    body: "I love beer don't you?",
  });
  return (
    <div style={{ height: "1000vh" }}>
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
}

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Strawberry", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

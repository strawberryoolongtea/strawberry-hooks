export default function App() {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 500 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}

export default function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          alt="masahiro-miyagi-unslpash"
          width="250"
          src="https://images.unsplash.com/photo-1641119249607-a9020d045a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

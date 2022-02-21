const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const onScroll = () => {
      console.log("y", window.scrollY, "x", window.scrollX);
      setState({ y: window.scrollY, x: window.scrollX });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return state;
};

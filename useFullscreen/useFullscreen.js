const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen === null) {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCallback(true);
      }
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCallback(false);
    }
    console.log("It's already small");
  };
  return { element, triggerFull, exitFull };
};

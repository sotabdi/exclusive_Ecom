self.onmessage = (e) => {
  let timer = e.data;
  const stopTimer = setInterval(() => {
    if (timer <= 0) {
      clearInterval(stopTimer);
      postMessage(0);
    } else {
      timer -= 1000;
      postMessage(timer);
    }
  }, 1000);
};

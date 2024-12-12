import { useEffect, useState } from "react";
const TimerCount = ({render,offerTime = 3}) => {
    const [timer, settimer] = useState(offerTime * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const w = new Worker(new URL("../../../Workers/CountDown.js", import.meta.url));
    w.postMessage(timer);
    w.onmessage = (e)=>{
        settimer(e.data)
    }

    return () => { // clearing when components will unmount
      w.terminate();
    };
  },[]);
  

  const formatDate = (milisec) => {
    let total_second = parseInt(Math.floor(milisec / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_Hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_Hours / 24));
    let second = parseInt(Math.floor(total_second % 60));
    let minutes = parseInt(Math.floor(total_minutes % 60));
    let hours = parseInt(Math.floor(total_Hours % 24));
    return { days, hours, minutes, second };
  };

  const { days, hours, minutes, second } = formatDate(timer);
  return render(days, hours, minutes, second )
}

export default TimerCount
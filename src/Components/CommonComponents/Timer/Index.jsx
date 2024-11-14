import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const Timer = () => {
  const [timer, settimer] = useState(3 * 24 * 60 * 60 * 1000);

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

  return (
    <div className="flex gap-x-5">
      <div className="flex flex-col gap-y-1">
        <p className="font-popins font-medium text-[12px] text-primaryBlack">
          Days
        </p>
        <div className="flex gap-x-4 items-center">
          <h6 className="font-inter font-bold text-[32px] text-primaryBlack">
            {days<=10 ? (`0${days}`): (days)}
          </h6>
          <div>
            <RxDotFilled color="var(--primaryRed)" size={"14px"} />
            <RxDotFilled color="var(--primaryRed)" size={"14px"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-popins font-medium text-[12px] text-primaryBlack">
          Hours
        </p>
        <div className="flex gap-x-4 items-center">
          <h6 className="font-inter font-bold text-[32px] text-primaryBlack">
            {hours}
          </h6>
          <div>
            <RxDotFilled color="var(--primaryRed)" size={"14px"} />
            <RxDotFilled color="var(--primaryRed)" size={"14px"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-popins font-medium text-[12px] text-primaryBlack">
          Minutes
        </p>
        <div className="flex gap-x-4 items-center">
          <h6 className="font-inter font-bold text-[32px] text-primaryBlack">
            {minutes}
          </h6>
          <div>
            <RxDotFilled color="var(--primaryRed)" size={"14px"} />
            <RxDotFilled color="var(--primaryRed)" size={"14px"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-popins font-medium text-[12px] text-primaryBlack">
          Seconds
        </p>
        <div className="flex gap-x-4 items-center">
          <h6 className="font-inter font-bold text-[32px] text-primaryBlack">
            {second}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Timer;

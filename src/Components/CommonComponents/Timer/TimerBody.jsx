import React from 'react';
import { RxDotFilled } from "react-icons/rx";

const TimerBody = ({days, hours, minutes, second }) => {
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
  )
}

export default TimerBody
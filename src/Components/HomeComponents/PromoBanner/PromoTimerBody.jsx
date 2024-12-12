import React from 'react'

const PromoTimerBody = ({days, hours, minutes, second}) => {

    
  return (
    <div className="flex gap-x-6">
              <div className="w-[62px] h-[62px] bg-primaryWhite rounded-full flex flex-col justify-center items-center">
                <p className="font-popins font-semibold text-[16px] text-primaryBlack">
                  {days<=10 ? (`0${days}`): (days)}
                </p>
                <span className="font-popins text-[11px] text-primaryBlack mt-[-5px]">
                  Days
                </span>
              </div>
              <div className="w-[62px] h-[62px] bg-primaryWhite rounded-full flex flex-col justify-center items-center">
                <p className="font-popins font-semibold text-[16px] text-primaryBlack">
                  {hours?hours:0}
                </p>
                <span className="font-popins text-[11px] text-primaryBlack mt-[-5px]">
                  Hours
                </span>
              </div>
              <div className="w-[62px] h-[62px] bg-primaryWhite rounded-full flex flex-col justify-center items-center">
                <p className="font-popins font-semibold text-[16px] text-primaryBlack">
                  {minutes?minutes:0}
                </p>
                <span className="font-popins text-[11px] text-primaryBlack mt-[-5px]">
                  Minutes
                </span>
              </div>
              <div className="w-[62px] h-[62px] bg-primaryWhite rounded-full flex flex-col justify-center items-center">
                <p className="font-popins font-semibold text-[16px] text-primaryBlack">
                  {second?second:0}
                </p>
                <span className="font-popins text-[11px] text-primaryBlack mt-[-5px]">
                  Second
                </span>
              </div>
            </div>
  )
}

export default PromoTimerBody
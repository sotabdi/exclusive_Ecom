import promoBanner from "../../../assets/promoBanner/promoBanner.png";
import TimerCount from "../../CommonComponents/Timer/TimerCount";
import PromoTimerBody from "./PromoTimerBody";

const PromoBanner = () => {
  return (
    <div className="py-[70px]">
      <div className="container bg-primaryBlack px-[56px] py-[43px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <p className="font-popins font-semibold text-[16px] text-[#00FF66]">
                Categories
              </p>
              <h2 className="font-inter font-semibold text-[48px] text-primaryWhite max-w-[450px]">
                Enhance Your Music Experience
              </h2>
            </div>
            <TimerCount
              render={(days, hours, minutes, second) => (
                <PromoTimerBody
                  days={days}
                  hours={hours}
                  minutes={minutes}
                  second={second}
                />
              )}
              offerTime={4}
            />
            <div>
              <button className="px-12 py-4 text-primaryWhite font-popins font-medium bg-[#00FF66] rounded inline-block">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <div className="imgShadow">
              <picture>
                <img
                  src={promoBanner}
                  alt={promoBanner}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

import NewArrival1 from "../../../assets/NewArrival/NewArrival1.png";
import NewArrival2 from "../../../assets/NewArrival/NewArrival2.png";
import NewArrival3 from "../../../assets/NewArrival/NewArrival3.png";
import NewArrival4 from "../../../assets/NewArrival/NewArrival4.png";
import TitleHead from "../../CommonComponents/TitleHeadComponent/Index";

const NewArriVal = () => {
  return (
    <div className="flex flex-col gap-y-[60px]">
      <TitleHead title={"Featured"} header={"New Arrival"} />
      <div className="flex gap-x-[30px]">
        <div className="bg-primaryBlack relative rounded w-[50%] flex justify-center items-end h-[600px] overflow-hidden">
          <picture>
            <img
              src={NewArrival1}
              alt={NewArrival1}
              className="h-full object-cover"
            />
          </picture>
          <div className="absolute bottom-0 left-0 px-8 py-8 flex flex-col gap-y-4">
            <h3 className="font-inter font-semibold text-[24px] text-primaryWhite">
              PlayStation 5
            </h3>
            <p className="font-inter text-[12px] text-primaryWhite max-w-[250px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div>
              <button className="font-popins text-[16px] font-semibold text-primaryWhite border-b border-b-primaryWhite inline-block">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-y-[32px]">
          <div className="bg-[#0D0D0D] rounded flex justify-end h-[284px] relative overflow-hidden">
            <picture>
              <img
                src={NewArrival2}
                alt={NewArrival2}
                className="h-full object-cover"
              />
            </picture>
            <div className="absolute bottom-0 left-0 px-8 py-8 flex flex-col gap-y-4">
              <h3 className="font-inter font-semibold text-[24px] text-primaryWhite">
                Women’s Collections
              </h3>
              <p className="font-inter text-[12px] text-primaryWhite max-w-[250px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <div>
                <button className="font-popins text-[16px] font-semibold text-primaryWhite border-b border-b-primaryWhite inline-block">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[30px]">
            <div className="bg-primaryBlack rounded w-[50%] flex justify-center items-center h-[284px] relative overflow-hidden">
              <picture>
                <img
                  src={NewArrival3}
                  alt={NewArrival3}
                  className="h-full object-cover"
                />
              </picture>
              <div className="absolute bottom-0 left-0 px-8 py-8 flex flex-col gap-y-4">
                <h3 className="font-inter font-semibold text-[24px] text-primaryWhite">
                  Speakers
                </h3>
                <p className="font-inter text-[12px] text-primaryWhite max-w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <div>
                  <button className="font-popins text-[16px] font-semibold text-primaryWhite border-b border-b-primaryWhite inline-block">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-primaryBlack rounded w-[50%] flex justify-center items-center h-[284px] relative overflow-hidden">
              <picture>
                <img
                  src={NewArrival4}
                  alt={NewArrival4}
                  className="h-full object-cover"
                />
              </picture>
              <div className="absolute bottom-0 left-0 px-8 py-8 flex flex-col gap-y-4">
                <h3 className="font-inter font-semibold text-[24px] text-primaryWhite">
                  Perfume
                </h3>
                <p className="font-inter text-[12px] text-primaryWhite max-w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <div>
                  <button className="font-popins text-[16px] font-semibold text-primaryWhite border-b border-b-primaryWhite inline-block">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArriVal;

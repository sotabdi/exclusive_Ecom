import { useState } from "react";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import Ratings from "../CommonComponents/Ratings/Index";

const ProductRight = () => {
    const [quantity , setquantity] = useState(1);


  return (
    <div>
      <div className="flex flex-col gap-y-4 border-b border-[rgba(0,0,0,0.5)]">
        <h6 className="font-inter font-semibold text-[40px] text-primaryBlack leading-10">
          Havic HV G-92 Gamepad
        </h6>
        <div className="flex items-center gap-x-4">
          <div className="flex gap-x-2">
            <Ratings rating={4} />
            <p className="font-popins text-[14px] text-[rgba(0,0,0,0.5)]">
              (150 Reviews)
            </p>
          </div>
          <span className="inline-block font-popins text-[14px] text-primaryBlack">
            |
          </span>
          <p className="font-popins text-[14px] text-[#00FF66]">In Stock</p>
        </div>
        <h6 className="font-inter text-[24px] text-primaryBlack leading-6">
          $192.00
        </h6>
        <p className="font-popins text-[14px] text-primaryBlack max-w-[400px] leading-[21px] pt-2 pb-6">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
      </div>
      <div className="flex flex-col gap-y-6 py-6">
        <div className="flex items-center gap-x-6">
          <p className="font-inter text-[20px] leading-5">Colours:</p>
          <div className="flex items-center gap-x-2">
            <span className="inline-block w-5 h-5 bg-purple-600 rounded-full"></span>
            <span className="inline-block w-5 h-5 bg-yellow-600 rounded-full"></span>
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <p className="font-inter text-[20px] leading-5">Size:</p>
          <div className="flex gap-x-4">
            {[...new Array(5)].map((_, index) => (
              <span
                key={index}
                className="inline-block font-popins font-medium text-[14px] leading-5 p-2 border border-[rgba(0,0,0,0.5)] rounded cursor-pointer hover:border-primaryRed hover:bg-primaryRed hover:text-primaryWhite transition-all"
              >
                XS
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center">
            <p className="font-popins font-medium text-[20px] text-primaryBlack px-3 py-2 border border-[rgba(0,0,0,0.5)] rounded-tl rounded-bl cursor-pointer hover:border-primaryRed hover:bg-primaryRed hover:text-primaryWhite transition-all">
              -
            </p>
            <input
              className="text-center font-popins font-medium text-[20px] text-primaryBlack inline-block w-[80px] py-2 border-t border-b border-[rgba(0,0,0,0.5)] "
              type="text"
              value={quantity}
            />
            <p className="font-popins font-medium text-[20px] text-primaryBlack px-3 py-2 border border-[rgba(0,0,0,0.5)] rounded-tr rounded-br cursor-pointer hover:border-primaryRed hover:bg-primaryRed hover:text-primaryWhite transition-all">
              +
            </p>
          </div>
          <div>
            <button className="font-popins font-medium text-[16px] text-primaryWhite bg-primaryRed leading-6 px-12 py-[12px] rounded hover:bg-[#d63c3c] transition-all">
              Buy Now
            </button>
          </div>
          <div className="ms-2 text-[25px] p-[10px] border border-[rgba(0,0,0,0.5)] rounded cursor-pointer hover:bg-primaryRed hover:text-white hover:border-primaryRed transition-all">
            <IoIosHeartEmpty />
          </div>
        </div>
      </div>
      <div className="border border-[rgba(0,0,0,0.5)] rounded ps-4 pe-10 inline-block">
        <div className="flex items-center gap-x-4 py-4 border-b border-[rgba(0,0,0,0.5)]">
          <div className="text-[40px]">
            <TbTruckDelivery />
          </div>
          <div>
            <p className="font-popins font-medium text-[16px] text-primaryBlack">
              Free Delivery
            </p>
            <span className="font-popins font-medium text-[12px] text-primaryBlack underline cursor-pointer">
              Enter your postal code for Delivery Availability
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 py-4">
          <div className="text-[40px]">
            <HiArrowPathRoundedSquare />
          </div>
          <div>
            <p className="font-popins font-medium text-[16px] text-primaryBlack">
              Return Delivery
            </p>
            <span className="font-popins font-medium text-[12px] text-primaryBlack">
              Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRight;

import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import productImg from "../../../assets/Products/product1.png";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ Options = {} }) => {
  // expect Options object to customize prodcut card options ex: price / color option  / discount bar / if it's needed or not

  //   <ProductCard Options={{price: true, colorOptions: false, discountBar: true}} /> expected impimentation

  const { price = true, colorOptions = false, discountBar = true } = Options; // default settings
  return (
    <div className="w-full flex flex-col gap-y-4 cursor-pointer group">
      <div className="w-full h-[250px] bg-secondaryWhite rounded flex justify-center items-center relative overflow-hidden">
        <div className="flex justify-between items-start p-3 absolute top-0 left-0 w-full">
          {discountBar ? (
            <span className="inline-block bg-primaryRed text-primaryWhite font-popins text-[12px] py-1 px-3 rounded">
              -40%
            </span>
          ) : (
            <div></div>
          )}
          <div className="flex flex-col gap-y-2">
            <div className="flex w-[34px] h-[34px] bg-primaryWhite justify-center items-center rounded-full cursor-pointer hover:bg-primaryRed hover:text-primaryWhite transition-all">
              <IoMdHeartEmpty size={"20px"} />
            </div>
            <div className="flex w-[34px] h-[34px] bg-primaryWhite justify-center items-center rounded-full cursor-pointer hover:bg-primaryRed hover:text-primaryWhite transition-all">
              <IoEyeOutline size={"20px"} />
            </div>
          </div>
        </div>
        <div>
          <picture>
            <img
              src={productImg}
              alt={productImg}
              className="w-full object-contain"
            />
          </picture>
        </div>
        <div className="w-full bg-black text-center py-2 absolute bottom-[-40px] left-0 transition-all duration-300 hover:bg-primaryRed group-hover:bottom-0">
          <h4 className="text-primaryWhite font-popins font-medium text-[16px]">Add To Cart</h4>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="font-popins text-[16px] font-medium text-primaryBlack">
          HAVIT HV-G92 Gamepad
        </h3>
        {price && (
          <div className="flex">
            <p className="font-popins text-[16px] font-medium text-primaryRed">
              $120
            </p>
            <p className="font-popins text-[16px] font-medium text-primaryBlack opacity-50 line-through px-3">
              $120
            </p>
          </div>
        )}
        <div className="flex items-center gap-x-2">
          <div className="flex">
            {[...new Array(5)].map((_, index) => (
              <div key={index}>
                <FaStar fill="#FFAD33" />
              </div>
            ))}
          </div>
          <p className="font-popins font-semibold text-[14px] text-primaryBlack opacity-50">
            (100)
          </p>
        </div>
        {colorOptions && (
          <div className="flex gap-x-2">
            <span
              className="inline-block w-5 h-5 rounded-full"
              style={{ background: "purple" }}
            ></span>
            <span
              className="inline-block w-5 h-5 rounded-full"
              style={{ background: "purple" }}
            ></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

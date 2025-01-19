import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Ratings from "../Ratings/Index";

const ProductCard = ({ data = {}, Options = {} }) => {
  // expect Options object to customize prodcut card options ex: price / color option  / discount bar / if it's needed or not

  //   <ProductCard Options={{price: true, colorOptions: false, discountBar: true}} /> expected impimentation

  const { price = true, colorOptions = false, discountBar = true } = Options; // default settings

  return (
    <div className="w-full flex flex-col gap-y-4 cursor-pointer group px-[15px] pb-[40px]">
      <div className="w-full h-[250px] bg-secondaryWhite rounded flex justify-center items-center relative overflow-hidden">
      <Link to={`/shop/${data.product._id}`}>
        <div className="flex justify-between items-start p-3 absolute top-0 left-0 w-full">
          {data?.discountPercentage ? (
            <span className="inline-block bg-primaryRed text-primaryWhite font-popins text-[12px] py-1 px-3 rounded">
              {`-$20%`}
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
                src={data?.product.images[1]}
                alt={data?.product.title}
                className="w-full object-contain"
              />
            </picture>
          </div>
        </Link>
        <div className="w-full bg-black text-center py-2 absolute bottom-[-40px] left-0 transition-all duration-300 hover:bg-primaryRed group-hover:bottom-0">
          <h4 className="text-primaryWhite font-popins font-medium text-[16px]">
            Add To Cart
          </h4>
        </div>
      </div>
      <Link to={`/shop/${data.product._id}`}>
        <div className="flex flex-col gap-y-2">
          <h3 className="font-popins text-[16px] font-medium text-primaryBlack w-full truncate">
            {data?.product.title}
          </h3>
          {price && (
            <div className="flex">
              <p className="font-popins text-[16px] font-medium text-primaryRed">
                ${data?.product.price}
              </p>
              {data?.discountPercentage && (
                <p className="font-popins text-[16px] font-medium text-primaryBlack opacity-50 line-through px-3">
                  ${data?.product.price}
                </p>
              )}
            </div>
          )}
          <div className="flex items-center gap-x-2">
            <div className="flex">
              <Ratings rating={data?.rating} />
            </div>
            <p className="font-popins font-semibold text-[14px] text-primaryBlack opacity-50">
              ({data?.product.reviews?.length})
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
      </Link>
    </div>
  );
};

export default ProductCard;

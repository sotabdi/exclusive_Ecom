import React from "react";
import { useGetAllCategoryQuery } from "../../Features/Api/ProductApi";
const ShopLeft = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery();
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-[15px]">
        <div>
          <h6 className="font-popins font-bold text-[20px] text-[#262626]">
            Shop By Category
          </h6>
        </div>
        <div>
          {isLoading ? (
            <ul className="flex flex-col gap-y-4">
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <li
                    key={index}
                    className="flex animate-pulse bg-gray-300 rounded w-full py-4"
                  ></li>
                ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-y-4">
              {data?.map((item, index) => (
                <li
                  key={index}
                  className="font-popins tetx-[16px] capitalize cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-[15px] pb-[50px]">
        <div>
            <h6 className="font-popins font-bold text-[20px] text-[#262626]">
              Shop By Color
            </h6>
        </div>
        <div>
        {isLoading ? (
            <ul className="flex flex-col gap-y-4">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <li
                    key={index}
                    className="flex animate-pulse bg-gray-300 rounded w-full py-4"
                  ></li>
                ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-y-4">
              {Array(3).fill('').map((_, index) => (
                <div key={index} className="flex items-center gap-x-[10px]">
                  <p className="w-3 h-3 rounded-full bg-red-600"></p>
                  <p className="font-popins text-[16px] text-[#767676]">Red</p>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopLeft;

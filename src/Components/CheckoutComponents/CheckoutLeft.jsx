import React from "react";

const CheckoutLeft = ({ userInfo, inputFeildArr, handleInput, err }) => {

  return (
    <div>
      <div>
        <h2 className="font-inter font-medium text-[36px] pt-[80px]">Billing Details</h2>
        <div className="flex flex-col gap-y-9 pt-12">
          {inputFeildArr?.map((item) => (
            <div key={item?.id} className="flex flex-col gap-y-2">
              <label className="font-popins text-[16px] text-[rgba(0,0,0,0.4)]">
                {item.title}
              </label>
              <input
                className="font-popins text-[16px] text-primaryBlack w-[500px] bg-secondaryWhite h-[50px] rounded px-4"
                type={item.type}
                onChange={(e) => handleInput(e, item?.placeholder)}
                value={userInfo?.placeholder}
              />
              {err[item.placeholder] && (
              <p className="font-popins text-[14px] py-1 text-primaryRed">
                {err[item.placeholder]}
              </p>
            )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-4 pt-6">
          <input className="w-6 h-6 rounded appearance-none checked:bg-primaryRed checked:border-transparent bg-gray-200 border border-gray-300 cursor-pointer" type="checkbox" onChange={(e) => handleInput(e, "checkbox")} />
          <p className="font-popins text-primaryBlack text-[16px]">Save this information for faster check-out next time</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;

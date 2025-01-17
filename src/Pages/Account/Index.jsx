import React from "react";
import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";

const Account = () => {
  return (
    <div className="pt-[80px] pb-[140px]">
      <div className="container">
        <div className="flex justify-between">
          <BreadCrums />
          <div>
            <h6 className="font-popins text-[14px] text-primaryBlack">
              Welcome! <span className="text-primaryRed">Md Rimel</span>
            </h6>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <h6 className="font-popins text-[16px] font-medium text-primaryBlack">
              Manage My Account
            </h6>
            <div className="flex flex-col gap-y-2 ms-[35px]">
              <p className="font-popins text-[16px] text-[rgba(0,0,0,0.5)] cursor-pointer">
                My Profile
              </p>
              <p className="font-popins text-[16px] text-[rgba(0,0,0,0.5)] cursor-pointer">
                Address Book
              </p>
              <p className="font-popins text-[16px] text-[rgba(0,0,0,0.5)] cursor-pointer">
                My Payment Options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

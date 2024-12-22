import React from "react";
import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";
import ShopLeft from "../../Components/ShopComponents/ShopLeft";
import ShopRight from "../../Components/ShopComponents/ShopRight";

const Shop = () => {
  return (
    <div className="container">
      <div className="pt-20 pb-[50px]">
        <BreadCrums />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <ShopLeft />
        </div>
        <div className="col-start-3 col-end-13 ps-[45px]">
          <ShopRight />
        </div>
      </div>
    </div>
  );
};

export default Shop;

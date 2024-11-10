import React from "react";
import Catagory from "../../Components/HomeComponents/Catagory/Index";
import Banner from "../../Components/HomeComponents/Banner/Index";

const Home = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 items-center">
        <div className="col-start-1 col-end-3">
          <Catagory />
        </div>
        <div className="col-start-3 col-end-13 border-s border-s-black30 ps-[45px] pt-10">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Home;

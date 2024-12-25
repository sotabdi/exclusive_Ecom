import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrums = () => {
  const { pathname } = useLocation();
  const route = pathname.split("/").filter((path) => path);

  return (
    <div className="flex gap-x-3">
      <p className="inline-block font-popins text-[16px] text-[#00000050]">
        <Link to={"/"}>Home</Link>
      </p>
      {route?.map((item, index) => (
        <div key={index}>
          {route.length - 1 === index ? (
            <div className="flex gap-x-3 font-popins text-[16px] text-primaryBlack font-normal">
              <span>/</span>
              <p className="inline-block">{item}</p>
            </div>
          ) : (
            <div className="flex gap-x-3 font-popins text-[16px] text-[#00000050] font-normal">
              <span>/</span>
              <p className="inline-block">
                <Link to={`/${item}`}>{item}</Link>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrums;

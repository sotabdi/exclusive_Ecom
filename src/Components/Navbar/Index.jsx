import { NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { useState } from "react";

const Navbar = () => {
  const [accountDropDown, setaccountDropDown] = useState(false);

  const menuItem = [
    {
      id: 1,
      Item: "Home",
      to: "",
    },
    {
      id: 2,
      Item: "Contact",
      to: "Contact",
    },
    {
      id: 3,
      Item: "About",
      to: "About",
    },
    {
      id: 4,
      Item: "Sign Up",
      to: "SignUp",
    },
  ];

  return (
    <div className="pt-10 pb-4 border-b border-b-black30">
      <div className="container">
        <div className="grid grid-cols-12 items-center relative">
          <div className="col-span-2">
            <h1 className="font-inter font-bold text-[24px] text-primaryBlack cursor-pointer">
              Exclusive
            </h1>
          </div>
          <div className="col-start-3 col-end-8 ps-[45px]">
            <nav>
              <ul className="flex gap-x-12">
                {menuItem?.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={`/${item.to}`}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "text-primaryBlack text-[16px] font-popins cursor-pointer navItemHover"
                          : isActive
                          ? "text-primaryBlack text-[16px] font-popins cursor-pointer navItemHover navitemActive"
                          : "text-primaryBlack text-[16px] font-popins cursor-pointer navItemHover"
                      }
                    >
                      {item.Item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-start-8 col-span-5">
            <div className="grid grid-cols-10 items-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="row-start-1 col-start-1 col-end-7 py-[10px] ps-5 pe-[70px] bg-secondaryWhite rounded-[4px] font-popins text-[12px] text-primaryBlack placeholder:opacity-70"
              />
              <div className="row-start-1 col-start-6 col-end-7 cursor-pointer">
                <FiSearch size={"24px"} />
              </div>
              <div className="col-start-8 col-span-3 flex justify-between items-center ms-12">
                <div className="menuIcon flex justify-center items-center">
                  <GrFavorite size={"24px"} />
                </div>
                <div className="relative">
                  <div className="menuIcon flex justify-center items-center">
                    <IoCartOutline size={"24px"} />
                  </div>
                  <p className="absolute w-4 h-4 bg-primaryRed rounded-full text-center leading-4 font-popins text-[12px] text-primaryWhite top-0 right-0">
                    0
                  </p>
                </div>
                <div
                  className="flex justify-center items-center menuIcon"
                  onClick={() => setaccountDropDown(!accountDropDown)}
                >
                  <FiUser size={"24px"} />
                </div>
              </div>
            </div>
          </div>
          {accountDropDown && (
            <div
              className="absolute right-0 bottom-[-250px] py-4 rounded-[4px] backdrop-blur-[150px] flex flex-col gap-y-[10px] z-10"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
            >
              <div className="flex gap-x-4 cursor-pointer hover:bg-black py-[5px] px-5 transition-all">
                <FiUser size={"24px"} stroke="#fafafa" />
                <p className="font-popins text-[14px] text-textWhite">
                  Manage My Account
                </p>
              </div>
              <div className="flex gap-x-4 cursor-pointer hover:bg-black py-[5px] px-5 transition-all">
                <FiShoppingBag size={"24px"} stroke="#fafafa" />
                <p className="font-popins text-[14px] text-textWhite">
                  My Order
                </p>
              </div>
              <div className="flex gap-x-4 cursor-pointer hover:bg-black py-[5px] px-5 transition-all">
                <MdOutlineCancel size={"24px"} fill="#fafafa" />
                <p className="font-popins text-[14px] text-textWhite">
                  My Cancellations
                </p>
              </div>
              <div className="flex gap-x-4 cursor-pointer hover:bg-black py-[5px] px-5 transition-all">
                <FaRegStar size={"24px"} fill="#fafafa" />
                <p className="font-popins text-[14px] text-textWhite">
                  My Reviews
                </p>
              </div>
              <div className="flex gap-x-4 cursor-pointer hover:bg-black py-[5px] px-5 transition-all">
                <SlLogout size={"24px"} fill="#fafafa" />
                <p className="font-popins text-[14px] text-textWhite">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

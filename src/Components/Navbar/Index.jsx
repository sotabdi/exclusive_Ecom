import { NavLink } from "react-router-dom";
import { FiSearch, FiUser } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const menuItem = [
    {
      id: 1,
      Item: "Home",
      to:''
    },
    {
      id: 1,
      Item: "Contact",
      to:'Contact'
    },
    {
      id: 1,
      Item: "About",
      to:'About'
    },
    {
      id: 1,
      Item: "Sign Up",
      to:'SignUp'
    },
  ];
  return (
    <div className="pt-10 pb-4 border-b border-b-black30">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
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
            {/* <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="py-[10px] ps-5 pe-[70px] bg-secondaryWhite rounded-[4px] font-popins text-[12px] text-primaryBlack placeholder:opacity-70"
              />
              <div className="absolute top-[50%] right-[65%] translate-y-[-50%] cursor-pointer">
                <FiSearch />
              </div>
            </div> */}
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
                <div className="flex justify-center items-center menuIcon">
                  <FiUser size={"24px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

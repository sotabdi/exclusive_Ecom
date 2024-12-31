import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Form = ({
  userInfo,
  inputFeildArr = [{ placeholder: "Name", type: "text" }],
  err,
  handleInput,
  handleSubmit,
  theme = "signin",
  header = 'ex: header',
  title = "ex: title"
}) => {
  const [visible, setvisible] = useState(false);
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-6">
        <h5 className="font-inter font-medium text-[36px] text-primaryBlack">
          {header}
        </h5>
        <p className="font-popins text-[16px] text-primaryBlack">
          {title}
        </p>
      </div>
      <div className="flex flex-col gap-y-10">
        {inputFeildArr?.map((item, index) => (
          <div key={index}>
            <div className="relative">
              <input
                type={
                  item.type === "password"
                    ? visible
                      ? "text"
                      : "password"
                    : item.type
                }
                className="w-full border-b border-[rgba(0,0,0,0.4)] font-popins text-[16px] py-2 focus:border-primaryBlack"
                placeholder={item.placeholder}
                value={userInfo?.placeholder}
                onChange={(e) => handleInput(e, item.placeholder)}
              />
              {item.type === "password" && (
                <span
                  className="inline-block absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer"
                  onClick={() => setvisible(!visible)}
                >
                  {visible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              )}
            </div>
            {err[item.placeholder] && (
              <p className="font-popins text-[14px] py-1 text-primaryRed">
                {err[item.placeholder]}
              </p>
            )}
          </div>
        ))}
      </div>
      {theme === "signup" && (
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <button
            className="w-full bg-primaryRed rounded font-inter font-semibold text-[16px] text-primaryWhite py-4"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <button className="flex justify-center gap-x-2 items-center w-full border border-primaryBlack rounded font-inter font-semibold text-[16px] text-primaryBlack py-4">
            <span className="inline-block text-[24px]">
              <FcGoogle />
            </span>{" "}
            Sign up with Google
          </button>
          <p className="pt-4 font-popins text-[16px] text-[rgba(0,0,0,0.7)]">Already have account? <span className="inline-block font-medium underline cursor-pointer">Log in</span></p>
        </div>
      )}
      {theme === "signin" && (
        <div className="flex justify-between items-center">
          <button
            className=" px-12 bg-primaryRed rounded font-inter font-semibold text-[16px] text-primaryWhite py-4"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <button className="font-popins text-[16px] text-primaryRed">
            Forgot password
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;

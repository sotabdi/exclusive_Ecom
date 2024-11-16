import { CiMobile4 } from "react-icons/ci";

const CatagoryItem = ({data={}}) => {
  return (
    <div className="w-full flex justify-center items-center px-[15px] pt-[60px]">
      <div className="w-full flex flex-col gap-y-4 items-center justify-center h-[155px] border border-primaryBlack rounded text-primaryBlack hover:bg-primaryRed  hover:text-primaryWhite transition-all cursor-pointer hover:border-primaryRed">
        <p className="text-5xl">{data.icon}</p>
        <p className="font-popins text-[16px]">{data.title}</p>
      </div>
    </div>
  );
};

export default CatagoryItem;

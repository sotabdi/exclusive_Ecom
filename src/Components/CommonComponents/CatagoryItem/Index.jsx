import { CiMobile4 } from "react-icons/ci";

const CatagoryItem = () => {
  return (
    <div className="w-[90%] h-[155px] border border-primaryBlack flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <CiMobile4 size={"65px"} />
        <p>Phones</p>
      </div>
    </div>
  );
};

export default CatagoryItem;

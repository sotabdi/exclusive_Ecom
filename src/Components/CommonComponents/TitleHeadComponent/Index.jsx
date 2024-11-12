const TitleHead = ({ title, header }) => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <div className="flex items-center gap-x-4">
        <span className="w-[20px] h-[40px] bg-primaryRed rounded block"></span>
        <h6 className="font-popins text-[16px] font-semibold text-primaryRed">
          {title ? title : "expect title"}
        </h6>
      </div>
      <div>
        <h5 className="font-inter font-semibold text-[36px] text-primaryBlack">
          {header ? header : "expect header"}
        </h5>
      </div>
    </div>
  );
};

export default TitleHead;

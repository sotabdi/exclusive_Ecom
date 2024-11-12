import TitleHead from "../../CommonComponents/TitleHeadComponent/Index";
import Timer from "../../CommonComponents/Timer/Index";

const FlashSale = () => {
  return (
    <div className="flex items-end gap-x-[87px]">
      <TitleHead title={"Today"} header={"Flash Sales"} />
      <Timer/>
    </div>
  );
};

export default FlashSale;

import TitleHead from "../../CommonComponents/TitleHeadComponent/Index";
import Timer from "../../CommonComponents/Timer/Index";
import ProductCard from "../../CommonComponents/ProductCard/Index";

const FlashSale = () => {
  return (
    <div className="flex flex-col gap-10 pb-[60px] border-b border-b-black30">
      <div className="flex items-end gap-x-[87px]">
        <TitleHead title={"Today"} header={"Flash Sales"} />
        <Timer />
      </div>
      <div className="flex justify-between gap-x-[30px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="px-12 py-4 bg-primaryRed text-primaryWhite font-popins font-medium text-[16px] hover:bg-secondaryRed transition-all rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSale;

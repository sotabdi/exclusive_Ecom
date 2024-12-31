import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";
import ProductCard from "../../Components/CommonComponents/ProductCard/Index";

const Wishlist = () => {
  return (
    <div className="pt-[80px] pb-[140px]">
      <div className="container">
        <BreadCrums />
        <div className="flex flex-col gap-y-[60px]">
          <div className="flex justify-between items-center">
            <h5 className="font-popins text-[20px] text-primaryBlack">Wishlist(4)</h5>
            <button className="font-popins text-[16px] text-primaryBlack border border-primaryBlack rounded px-[48px] py-[16px]">Move All To Bag</button>
          </div>
          <div className="flex items-center justify-between">
            {[...new Array(4)].map((item, index)=>(
                <div key={index} className="w-full">
                    <ProductCard/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

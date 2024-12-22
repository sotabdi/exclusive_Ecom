import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
import ProductSkeleton from "../../Halper/ProductSkeleton";
import ProductCard from "../CommonComponents/ProductCard/Index";
const ShopRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
console.log(data);

  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center gap-x-3">
          <p className="font-popins text-[16px] text-primaryBlack">Show :</p>
          <select
            name=""
            id=""
            className="ps-[45px] pe-[35px] py-[3px] border border-primaryBlack rounded font-popins text-[16px] text-primaryBlack"
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-12">
        {isLoading ? (
          Array(9)
            .fill("")
            .map((_, index) => (
              <div key={index} className="col-span-4"><ProductSkeleton/></div>
            ))
        ) : (
          data?.products?.map((products,index)=>(
            <div key={index} className="col-span-4">
            <ProductCard data={products}/>
          </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopRight;

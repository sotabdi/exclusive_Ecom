import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
import ProductCard from "../../CommonComponents/ProductCard/Index";
import ProductLayout from "../../CommonComponents/ProductLayout/Index";
const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className=" border-b border-b-black30 pt-[140px] pb-[120px]">
      <ProductLayout
        Options={{
          ContentPlaceHolder: ProductCard,
          timeStamp: true,
          offerTime: 3,
          title: "Todays",
          header: "Flash Sales",
          isArrow: true,
          contentData: data?.products,
          isLoading,
        }}
      />
    </div>
  );
};

export default FlashSale;

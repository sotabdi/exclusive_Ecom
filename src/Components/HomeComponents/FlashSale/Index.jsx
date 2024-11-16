import ProductLayout from "../../CommonComponents/ProductLayout/Index";
import ProductCard from "../../CommonComponents/ProductCard/Index";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  console.log(data);

  return (
    <div className=" border-b border-b-black30">
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

import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
import ProductCard from "../../CommonComponents/ProductCard/Index";
import ProductLayout from "../../CommonComponents/ProductLayout/Index";

const ExploreProduct = () => {
    const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div className="pb-[168px]">
        <ProductLayout Options={{
          ContentPlaceHolder: ProductCard,
          timeStamp: false,
          offerTime: 3,
          title: "Our Products",
          header: "Explore Our Products",
          isArrow: true,
          contentData: data?.products,
          isLoading,
          row:2
        }}/>
    </div>
  )
}

export default ExploreProduct
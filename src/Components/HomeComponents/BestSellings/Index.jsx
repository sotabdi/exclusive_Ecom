import React from "react";
import ProductLayout from "../../CommonComponents/ProductLayout/Index";
import ProductCard from "../../CommonComponents/ProductCard/Index";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";


const BestSellings = () => {
    const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div className="pt-[70px]">
      <ProductLayout
        Options={{
          title: "This Month",
          header: "Best Selling Products",
          isbutton: false,
          isArrow: false,
          ContentPlaceHolder: ProductCard,
          contentData: data?.products,
          isLoading,
          buttonText: "View All",
          discountBar: false,
        }}
      />
    </div>
  );
};

export default BestSellings;

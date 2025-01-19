import { useGetAllCategoryQuery } from "../../../Features/Api/ExclusiveApi";
import CatagoryItem from "../../CommonComponents/CatagoryItem/Index";
import ProductLayout from "../../CommonComponents/ProductLayout/Index";

const Category = () => {
  const {data, isLoading, isError} = useGetAllCategoryQuery()
  
  return (
    <div className="w-full border-b border-b-black30 pt-[80px] pb-[70px]">
      <ProductLayout
        Options={{
          title: "Categories",
          header: "Categories",
          ContentPlaceHolder: CatagoryItem,
          col: 6,
          contentData: data?.data,
          isArrow: true,
          isbutton: false,
        }}
      />
    </div>
  );
};

export default Category;

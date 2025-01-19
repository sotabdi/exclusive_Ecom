import { useParams } from "react-router-dom";
import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";
import ProductLeft from "../../Components/ProductComponents/ProductLeft";
import ProductRight from "../../Components/ProductComponents/ProductRight";
import { useGetsingleProductQuery } from "../../Features/Api/ExclusiveApi";


const Product = () => {
  const params = useParams()

  const {data, isError ,isLoading } = useGetsingleProductQuery(params.id)
  
  return (
    <div className="container">
        <div className="mt-20 mb-[140px]">
      <BreadCrums />
      <div className="grid grid-cols-12 gap-x-[40px] items-center pt-20">
        <div className="col-start-1 col-end-8">
          <ProductLeft data={data?.data?.images} isLoading={isLoading} />
        </div>
        <div className="col-start-8 col-end-13">
          <ProductRight productDetails={data?.data} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;

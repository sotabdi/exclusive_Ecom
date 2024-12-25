import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";
import ProductLeft from "../../Components/ProductComponents/ProductLeft";
import ProductRight from "../../Components/ProductComponents/ProductRight";

const Product = () => {
  return (
    <div className="container">
        <div className="mt-20 mb-[140px]">
      <BreadCrums />
      <div className="grid grid-cols-12 gap-x-[40px] items-center pt-20">
        <div className="col-start-1 col-end-8">
          <ProductLeft />
        </div>
        <div className="col-start-8 col-end-13">
          <ProductRight />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;

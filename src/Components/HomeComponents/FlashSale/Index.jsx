import ProductLayout from "../../CommonComponents/ProductLayout/Index";
import ProductCard from "../../CommonComponents/ProductCard/Index";

const FlashSale = () => {
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
      }}
    />
    </div>
  );
};

export default FlashSale;

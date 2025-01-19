import CatagoryList from "../../Components/CommonComponents/CatagoryList/Index";
import Banner from "../../Components/HomeComponents/Banner/Index";
import Category from '../../Components/HomeComponents/Catagory/Index';
import FlashSale from "../../Components/HomeComponents/FlashSale/Index";

const Home = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 items-start">
        <div className="col-start-1 col-end-3 pt-10">
          <CatagoryList />
        </div>
        <div className="col-start-3 col-end-13 border-s border-s-black30 ps-[45px] pt-10">
          <Banner />
        </div>
      </div>
      <FlashSale />
      <Category />
      {/* <BestSellings />
      <PromoBanner />
      <ExploreProduct />
      <NewArriVal/>
      <Support/> */}
    </div>
  );
};

export default Home;

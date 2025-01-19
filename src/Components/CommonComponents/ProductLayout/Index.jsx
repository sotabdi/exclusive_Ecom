import { useRef } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import Slider from "react-slick";
import ProductSkeleton from "../../../Halper/ProductSkeleton";
import Timer from "../Timer/Index";
import TitleHead from "../TitleHeadComponent/Index";

const ProductLayout = ({ Options = {} }) => {
  const {
    ContentPlaceHolder = () => <ProductSkeleton />,
    title = "ex:title",
    header = "ex:header",
    timeStamp = false,
    offerTime = 0,
    isArrow = false,
    isbutton = true,
    buttonText = "ex:todo",
    isLoading = false,
    contentData = [],
    row = 1,
    col = 4,
    slideBy = col - 2,
    discountBar= true,
  } = Options;
 
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: col,
    slidesToScroll: slideBy,
    rows: row,
    autoplay: false,
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-end">
        <div className="flex items-end gap-x-[87px]">
          <TitleHead title={title} header={header} />
          {timeStamp && <Timer offerTime={offerTime} />}
        </div>
        {(isArrow && (
          <div className="flex items-center gap-x-2">
            <div
              className="flex justify-center items-center w-[46px] h-[46px] rounded-full bg-secondaryWhite cursor-pointer hover:bg-primaryBlack hover:text-primaryWhite transition-all"
              onClick={prev}
            >
              <HiArrowSmallLeft size={"24px"} />
            </div>
            <div
              className="flex justify-center items-center w-[46px] h-[46px] rounded-full bg-secondaryWhite cursor-pointer hover:bg-primaryBlack hover:text-primaryWhite transition-all"
              onClick={next}
            >
              <HiArrowSmallRight size={"24px"} />
            </div>
          </div>
        )) ||
          (!isArrow && (
            <button className="text-[16px] font-popins font-medium text-primaryWhite bg-primaryRed px-12 py-4 rounded hover:bg-secondaryRed transition-all">
              {buttonText}
            </button>
          ))}
      </div>
      <div className="slider-container custom_slider pt-[40px] pb-[20px]">
        <Slider ref={sliderRef} {...settings}>
          {(isLoading &&
            [...new Array(10)].map((_, index) => (
              <div key={index}>{<ProductSkeleton />}</div>
            ))) ||
            (contentData &&
              contentData?.map((item) => (
                <div key={item?._id}>
                  {<ContentPlaceHolder data={item ? item : {}} Options={{discountBar: discountBar}}/>}
                </div>
              )))}
        </Slider>
      </div>
      {isbutton && (
        <div className="flex justify-center items-center">
          <button className="px-12 py-4 bg-primaryRed text-primaryWhite font-popins font-medium text-[16px] hover:bg-secondaryRed transition-all rounded">
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductLayout;

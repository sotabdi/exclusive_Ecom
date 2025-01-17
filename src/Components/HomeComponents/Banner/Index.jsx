import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useGetAllBannerQuery } from "../../../Features/Api/ExclusiveApi";

const Banner = () => {
  const { data, isLoading, isError } = useGetAllBannerQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, .5)",
        }}
      ></div>
    ),
  };

  return (
    <div className="w-full h-[500px] overflow-hidden">
      <div className="slider-container">
        {isLoading ? (
          <div className="w-full h-[500px] bg-gray-200 animate-pulse transition-all"></div>
        ) : (
          <Slider {...settings}>
            {data?.data.map((item) => (
              <div key={item._id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Banner;

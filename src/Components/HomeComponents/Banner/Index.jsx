import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from "../../../assets/BannerAssets/BannerImg.jpg";

const Banner = () => {
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
    <div className="w-full h-full">
      <div className="slider-container">
        <Slider {...settings}>
          {[...new Array(5)].map((_, index) => (
            <div key={index}>
              <img
                src={BannerImg}
                alt={BannerImg}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

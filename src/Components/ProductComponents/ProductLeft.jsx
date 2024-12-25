import { useRef, useState } from "react";
import ThumImg from "../../assets/Product/Thumb.png";
import Veiw from "../../assets/Product/Veiw.png";
const ProductLeft = () => {
  const imgBoxRef = useRef(null);
  const [imgScale, setImgScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setImgScale(1.5); // Zoom in on hover
  };

  const handleMouseLeave = () => {
    setImgScale(1); // Reset zoom when mouse leaves
    setPosition({ x: 0, y: 0 }); // Reset position
  };

  const handleMouseMove = (e) => {
    const box = imgBoxRef.current;
    const rect = box.getBoundingClientRect();
    const x = Math.min(
      Math.max(((e.clientX - rect.left) / rect.width - 0.5) * 100, -50),
      50
    ); // Clamping between -50% and 50%
    const y = Math.min(
      Math.max(((e.clientY - rect.top) / rect.height - 0.5) * 100, -50),
      50
    ); // Clamping between -50% and 50%

    setPosition({ x, y });
  };

  return (
    <div className="grid grid-col-7 gap-x-[30px] items-center">
      <div className="col-span-2">
        <div className="flex flex-col gap-y-4">
          {[...new Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-secondaryWhite flex justify-center items-center h-[138px] cursor-pointer overflow-hidden rounded"
            >
              <img src={ThumImg} alt={ThumImg} className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-start-3 col-end-8">
        <div
          ref={imgBoxRef}
          className="flex bg-secondaryWhite justify-center items-center h-[600px] rounded overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <picture>
            <img
              src={Veiw}
              alt={Veiw}
              className="object-cover"
              style={{
                transform: `scale(${imgScale}) translate(${-position.x}%, ${-position.y}%)`,
                transition: "transform 0.1s ease",
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;

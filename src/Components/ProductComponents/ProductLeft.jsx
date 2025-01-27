import { useEffect, useState } from "react";
import InnerZoom from "./InnerZoom";
const ProductLeft = ({ data, isLoading }) => {
  const [currentImg, setcurretImg] = useState(null);

  useEffect(() => {
    data?.length && setcurretImg(data[0]);
  }, [data]);


  return (
    <div className="grid grid-col-7 gap-x-[30px] items-start">
      <div className="col-span-2">
        <div className="flex flex-col gap-y-4">
          {!isLoading &&
            data?.map((item, index) => (
              <div
                key={index}
                className="bg-secondaryWhite flex justify-center items-center h-[138px] w-[170px] cursor-pointer overflow-hidden rounded"
                onClick={() => setcurretImg(item)}
              >
                <img src={item} alt={item} className="object-cover" />
              </div>
            ))}
        </div>
      </div>
      <div className="col-start-3 col-end-8">
        {currentImg && <InnerZoom display={currentImg} />}
      </div>
    </div>
  );
};

export default ProductLeft;

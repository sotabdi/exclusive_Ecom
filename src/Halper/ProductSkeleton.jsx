const ProductSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 cursor-pointer animate-pulse">
      <div className="w-full h-[250px] bg-gray-200 rounded flex px-[15px] pb-[60px] pt-[40px] justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full flex justify-between items-start p-3">
          <span className="inline-block w-12 h-5 bg-gray-300 rounded"></span>
          <div className="flex flex-col gap-y-2">
            <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div>
            <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
        <div className="flex gap-x-3">
          <div className="w-16 h-5 bg-gray-300 rounded"></div>
          <div className="w-16 h-5 bg-gray-300 rounded opacity-50"></div>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="flex">
            {[...new Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-gray-300 rounded-full"
              ></div>
            ))}
          </div>
          <div className="w-10 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex gap-x-2">
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;

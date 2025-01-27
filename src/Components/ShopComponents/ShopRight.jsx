import { useState } from "react";
import { useGetAllProductQuery } from "../../Features/Api/ExclusiveApi";
import ProductSkeleton from "../../Helpers/ProductSkeleton";
import ProductCard from "../CommonComponents/ProductCard/Index";
const ShopRight = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  const [page, setpage] = useState(1);
  const [pagepershow, setpagepershow] = useState(9);

  // pagination functionality
  const handlePage = (pageIndex) => {
    setpage(pageIndex);
  };
  const handleSelect = (e) => {
    setpagepershow(e.target.value);
  };
console.log(data?.data);

  return (
    <div className="flex flex-col">
      <div className="flex justify-end pb-[30px]">
        <div className="flex items-center gap-x-3">
          <p className="font-popins text-[16px] text-primaryBlack">Show :</p>
          <select
            name=""
            id=""
            className="ps-[45px] pe-[35px] py-[3px] border border-primaryBlack rounded font-popins text-[16px] text-primaryBlack"
            onChange={handleSelect}
            value={pagepershow}
          >
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-12">
        {isLoading
          ? Array(9)
              .fill("")
              .map((_, index) => (
                <div key={index} className="col-span-4 mb-5">
                  <ProductSkeleton />
                </div>
              ))
          : data?.data
              .slice(page * pagepershow - pagepershow, page * pagepershow)
              ?.map((products, index) => (
                <div key={index} className="col-span-4">
                  <ProductCard data={products} />
                </div>
              ))}
      </div>

      {/* pagination */}
      {!isLoading && (
        <div aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base mb-[104px]">
            {page > 1 && (
              <li>
                <div
                  onClick={() => {
                    setpage((prev) => prev - 1);
                  }}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-400 bg-primaryBlack border border-primaryWhite font-popins hover:bg-[#000000c4] hover:text-primaryWhite transition-all cursor-pointer"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </div>
              </li>
            )}
            {[
              ...new Array(Math.ceil(data?.data?.length / pagepershow)),
            ].map((_, index) => (
              <li
                key={index}
                onClick={() => handlePage(index + 1)}
                className={
                  index + 1 === page
                    ? "flex items-center justify-center px-4 h-10 leading-tigh border border-primaryWhite font-popins bg-[#000000c4] text-primaryWhite transition-all cursor-pointer"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-400 bg-primaryBlack border border-primaryWhite font-popins hover:bg-[#000000c4] hover:text-primaryWhite transition-all cursor-pointer"
                }
              >
                {index + 1}
              </li>
            ))}
            {page < data?.data?.length / pagepershow && (
              <li>
                <div
                  onClick={() => {
                    setpage((prev) => prev + 1);
                  }}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-400 bg-primaryBlack border border-primaryWhite font-popins hover:bg-[#000000c4] hover:text-primaryWhite transition-all cursor-pointer"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShopRight;

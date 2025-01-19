import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useGetAllCategoryQuery } from "../../../Features/Api/ExclusiveApi";

const CatagoryList = () => {
  const { data, isLoading, isError } = useGetAllCategoryQuery();
  const [isCurrent, setisCurrent] = useState(null);

  const handleSubcategory = (id) => {
    setisCurrent((prev) => {
      return prev == id ? null : id;
    });
  };
  return (
    <div>
      <ul className="flex flex-col gap-y-2">
        {isLoading
          ? [...new Array(9)].map((_, index) => (
              <div
                key={index}
                className="flex w-full h-[45px] bg-gray-200 animate-pulse transition-all"
              ></div>
            ))
          : data?.data?.map((item) => (
              <div key={item._id}>
                <div
                  className="flex items-center justify-between cursor-pointer text-primaryBlack hover:ps-3 hover:bg-primaryBlack hover:text-primaryWhite transition-all py-[10px]"
                  onClick={() => handleSubcategory(item._id)}
                >
                  <li className="font-popins text-[16px]">{item.name}</li>
                  {item.subCategory.length > 0 && (
                    <div className="me-9">
                      <IoChevronForward size={"24px"} />
                    </div>
                  )}
                </div>
                {item?.subCategory?.length > 0 &&
                  item.subCategory.map((sitem) => (
                    <div
                      key={sitem._id}
                      className={`transition-max-height ease-in-out duration-500 overflow-hidden ${
                        isCurrent === item._id
                          ? "max-h-[200px]"
                          : "max-h-0"
                      }`}
                      style={{
                        transition: "max-height 0.5s ease",
                      }}
                    >
                      <li className="ps-3">{sitem.name}</li>
                    </div>
                  ))}
              </div>
            ))}
      </ul>
    </div>
  );
};

export default CatagoryList;

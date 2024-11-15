import { allCatagrory } from "../../../../Data/Data";
import { IoChevronForward } from "react-icons/io5";

const CatagoryList = () => {
  return (
    <div>
      <ul className="flex flex-col gap-y-2">
        {allCatagrory?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between cursor-pointer text-primaryBlack hover:ps-3 hover:bg-primaryBlack hover:text-primaryWhite transition-all py-[10px]"
          >
            <li className="font-popins text-[16px]">{item.title}</li>
            {item.subCatagory && (
              <div className="me-9">
                <IoChevronForward size={"24px"} />
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CatagoryList;

import CatagoryItem from "../../CommonComponents/CatagoryItem/Index";
import ProductLayout from "../../CommonComponents/ProductLayout/Index";
import { CiMobile4 } from "react-icons/ci";

const Catagory = () => {
  const catagoryBrowse = [
    {
      id: 1,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 2,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 3,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 4,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 5,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 6,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 7,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 8,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 9,
      title: "Phone",
      icon: <CiMobile4 />,
    },
    {
      id: 10,
      title: "Phone",
      icon: <CiMobile4 />,
    },
  ];
  return (
    <div className="w-full border-b border-b-black30">
      <ProductLayout
        Options={{
          title: "Categories",
          header: "Categories",
          ContentPlaceHolder: CatagoryItem,
          col: 6,
          contentData: catagoryBrowse,
          isArrow: true,
          isbutton: false,
        }}
      />
    </div>
  );
};

export default Catagory;

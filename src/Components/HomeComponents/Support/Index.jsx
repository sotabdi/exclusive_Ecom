import { TbTruckDelivery } from "react-icons/tb";

const Support = () => {
  const support = [
    {
      id: 1,
      icon: <TbTruckDelivery />,
      header: "FREE AND FAST DELIVERY",
      title: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <TbTruckDelivery />,
      header: "FREE AND FAST DELIVERY",
      title: "Free delivery for all orders over $140",
    },
    {
      id: 3,
      icon: <TbTruckDelivery />,
      header: "FREE AND FAST DELIVERY",
      title: "Free delivery for all orders over $140",
    },
  ];
  return (
    <div className="py-[140px]">
      <div className="flex gap-x-[88px] justify-center">
        {support?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-y-6"
          >
            <div className="w-[80px] h-[80px] rounded-full bg-[#2f2e3031] flex justify-center items-center">
              <div className="w-[60px] h-[60px] bg-primaryBlack rounded-full flex flex-col justify-center items-center gap-y-2 text-[40px] text-primaryWhite">
                {item.icon}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <h5 className="font-popins font-semibold text-[20px] text-primaryBlack">
                {item.header}
              </h5>
              <p className="font-popins text-[14px] text-primaryBlack">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

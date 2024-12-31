import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";
import Img from "../../assets/Product/Veiw.png";

const Cart = () => {
  return (
    <div className="container pt-[80px] pb-[140px]">
      <BreadCrums />
      <div className="py-[80px]">
        <div className="flex flex-col gap-y-10">
          <div className="grid grid-cols-12 gap-10 rounded shadow-sm px-10 py-6 items-center">
            <div className="col-span-3 font-popins text-[16px] text-primaryBlack">
              Product
            </div>
            <div className="col-span-3 font-popins text-[16px] text-primaryBlack">
              Price
            </div>
            <div className="col-span-3 font-popins text-[16px] text-primaryBlack">
              Quantity
            </div>
            <div className="col-span-3 font-popins text-[16px] text-primaryBlack">
              Subtotal
            </div>
          </div>
          {[...new Array(4)].map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-10 rounded shadow-sm px-10 py-6 items-center "
            >
              <div className="col-span-3 flex items-center gap-x-5">
                <img src={Img} alt={Img} className="w-[50px]" />
                <p className="font-popins text-[16px] text-primaryBlack">
                  H1 Gamepad
                </p>
              </div>
              <div className="col-span-3 ">
                <p className="font-popins text-[16px] text-primaryBlack">600</p>
              </div>
              <div className="col-span-3 ">
                <div className="inline-block relative">
                  <input
                    type="text"
                    value={"1"}
                    className="font-popins text-[16px] text-primaryBlack border border-[rgba(0,0,0,0.4)] rounded py-2 w-[72px] px-3"
                  />
                  <div className="absolute top-[50%] right-3 -translate-y-[50%]">
                    <span>
                      <IoIosArrowUp />
                    </span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-3 ">
                <p className="font-popins text-[16px] text-primaryBlack">600</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-6">
          <button className="font-popins text-[16px] text-primaryBlack border border-primaryBlack rounded px-[48px] py-[16px] hover:border-primaryRed hover:bg-primaryRed hover:text-primaryWhite transition-all">
            Return To Shop
          </button>
          <button className="font-popins text-[16px] text-primaryBlack border border-primaryBlack rounded px-[48px] py-[16px] hover:border-primaryRed hover:bg-primaryRed hover:text-primaryWhite transition-all">
            Update Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-start">
          <input
            type="text"
            className="font-popins text-[16px] py-4 px-4 border border-primaryBlack text-primaryBlack w-[300px] rounded"
            placeholder="Coupon Code"
          />

          <button className="font-popins text-[16px] border rounded px-[48px] py-[16px] bg-primaryRed text-primaryWhite inline-block">
            Apply Cupon
          </button>
        </div>
        <div className="w-[500px] border border-primaryBlack rounded px-6 py-8 flex flex-col">
          <h6 className="font-popins font-medium text-[20px] text-primaryBlack pb-6">
            Cart
          </h6>
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center font-popins text-[16px] text-primaryBlack py-4 border-b border-primaryBlack">
              <p>Subtotal</p>
              <p>600</p>
            </div>
            <div className="flex justify-between items-center font-popins text-[16px] text-primaryBlack py-4 border-b border-primaryBlack">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between items-center font-popins text-[16px] text-primaryBlack py-4 ">
              <p>Total</p>
              <p>600</p>
            </div>
          </div>
          <button className="font-popins text-[16px] border rounded px-[48px] py-[16px] bg-primaryRed text-primaryWhite inline-block">
            Procees to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

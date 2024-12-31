import Img from "../../assets/Product/Veiw.png";

const CheckoutRight = ({ userInfo, seterr, handleInput ,handleSubmit }) => {

  return (
    <div>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-6 items-center">
            <img src={Img} alt={Img} className="w-[50px]" />
            <h6 className="font-popins text-[16px] text-primaryBlack">
              LCD Monitor
            </h6>
          </div>
          <div>
            <p className="font-popins text-[16px] text-primaryBlack">$650</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-6 items-center">
            <img src={Img} alt={Img} className="w-[50px]" />
            <h6 className="font-popins text-[16px] text-primaryBlack">
              LCD Monitor
            </h6>
          </div>
          <div>
            <p className="font-popins text-[16px] text-primaryBlack">$650</p>
          </div>
        </div>
      </div>
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
      <div className="flex flex-col gap-y-8 pt-4">
        <div className="flex gap-x-4 items-center">
          <input
            type="radio"
            className="w-6 h-6"
            onChange={(e) => handleInput(e, "COD")}
          />
          <p className="font-popins text-[16px] text-primaryBlack">
            Cash On Delivery
          </p>
        </div>
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
        <div>
        <button className="font-popins text-[16px] border rounded px-[48px] py-[16px] bg-primaryRed text-primaryWhite inline-block" onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutRight;

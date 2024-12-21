import { AiOutlineSend } from "react-icons/ai";
import Qrcode from "../../assets/Footer/Qrcode.png";
import Appstore from "../../assets/Footer/appstore.png";
import Playstore from "../../assets/Footer/playstore.png";
import FooterMenu from "../CommonComponents/FooterMenu";

const Footer = () => {
  const supprtMenu = [
    {
      id: 1,
      text: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
      link: null,
    },
    {
      id: 2,
      text: "exclusive@gmail.com",
      link: null,
    },
    {
      id: 3,
      text: "+88015-88888-9999",
      link: null,
    },
  ];
  const AccountArr = [
    {
      id: 1,
      text: "My Account",
      link: "#",
    },
    {
      id: 2,
      text: "Login / Register",
      link: "#",
    },
    {
      id: 3,
      text: "Cart",
      link: "#",
    },
    {
      id: 4,
      text: "Wishlist",
      link: "#",
    },
    {
      id: 5,
      text: "Shop",
      link: "#",
    },
  ];
  const QuickLink = [
    {
      id: 1,
      text: "Privacy Policy",
      link: "#",
    },
    {
      id: 2,
      text: "Terms Of Use",
      link: "#",
    },
    {
      id: 3,
      text: "FAQ",
      link: "#",
    },
    {
      id: 4,
      text: "Contact",
      link: "#",
    },
  ];
  return (
    <div className="bg-primaryBlack">
      <div className="container">
        <div className="flex pt-[80px] pb-[60px] justify-between">
          <div className="flex flex-col gap-y-6">
            <h1 className="font-inter text-[24px] font-bold text-primaryWhite cursor-pointer">
              Exclusive
            </h1>
            <h5 className="font-popins font-medium text-[20px] text-primaryWhite">
              Subscribe
            </h5>
            <div className="flex flex-col gap-y-4">
              <p className="font-popins text-[16px] text-primaryWhite">
                Get 10% off your first order
              </p>
              <div className="inline-block relative">
                <input
                  type="text"
                  className="py-3 bg-transparent border border-primaryWhite rounded ps-4 pe-[71px] font-popins text-[16px] text-primaryWhite max-w-[250px]"
                  placeholder="Enter your Email"
                />
                <a
                  href="#"
                  className="text-primaryWhite text-[20px] absolute top-[50%] right-4 translate-y-[-50%]"
                >
                  <AiOutlineSend />
                </a>
              </div>
            </div>
          </div>
          <FooterMenu header="Support" listItem={supprtMenu} />
          <FooterMenu header="Account" listItem={AccountArr} />
          <FooterMenu header="Quick Link" listItem={QuickLink} />
          <div className="flex flex-col gap-y-6">
            <h5 className="font-popins font-medium text-[20px] text-primaryWhite">
              Download App
            </h5>
            <div className="flex flex-col gap-y-2">
              <p className="font-popins font-medium text-[12px] text-primaryWhite opacity-70">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-x-2">
                <div>
                  <img src={Qrcode} alt={Qrcode} />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="cursor-pointer">
                    <img src={Playstore} alt={Playstore} className="w-full" />
                  </div>
                  <div className="cursor-pointer">
                    <img src={Appstore} alt={Appstore} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primaryBlack border-t border-[#ffffff41]">
          <div className="container">
            <div className="flex justify-center items-center">
            <p className="text-[#ffffff41] pt-4 pb-5">&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;

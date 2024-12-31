import CheckoutLeft from "../../Components/CheckoutComponents/CheckoutLeft";
import CheckoutRight from "../../Components/CheckoutComponents/CheckoutRight";
import BreadCrums from "../../Components/CommonComponents/BreadCrums/Index";
import FormWrapper from "../../Components/CommonComponents/FormComponents/FormWrapper";
import { numberValidator } from "../../Utils/Validation";

const Checkout = () => {
  const inputArr = [
    {
      id: 1,
      title: "First Name*",
      placeholder: "Name",
      type: "text",
    },
    {
      id: 2,
      title: "Company Name*",
      placeholder: "ComapnyName",
      type: "text",
    },
    {
      id: 3,
      title: "Street Address*",
      placeholder: "StreetAddress",
      type: "text",
    },
    {
      id: 4,
      title: "Apartment, floor, etc. (optional)",
      placeholder: "Apartment",
      type: "text",
    },
    {
      id: 5,
      title: "Town/City*",
      placeholder: "City",
      type: "text",
    },
    {
      id: 6,
      title: "Phone Number*",
      placeholder: "PhoneNumber",
      type: "text",
    },
    {
      id: 8,
      title: "Email Address*",
      placeholder: "Email",
      type: "text",
    },
  ];

  //  handle submit form
  const handleSubmit = (userInfo, seterr) => {
    let haserr = false;
    const errors = {};

    if(!userInfo["Name"]){
        errors["Name"] = "Name is required";
        haserr = true;
    }
    if(!userInfo["ComapnyName"]){
        errors["ComapnyName"] = "Comapny Name is required";
        haserr = true;
    }
    if(!userInfo["StreetAddress"]){
        errors["StreetAddress"] = "Street Address Name is required";
        haserr = true;
    }
    if(!userInfo["City"]){
        errors["City"] = "City Name is required";
        haserr = true;
    }
    if(!userInfo["PhoneNumber"] || numberValidator(userInfo["PhoneNumber"])){
        errors["PhoneNumber"] = "Phone Number Name is required";
        haserr = true;
    }
    if(!userInfo["Email"]){
        errors["Email"] = "Email is required";
        haserr = true;
    }
 
    seterr(errors)
    if (!haserr) {
      console.log("ready to go");
    }
  };
  return (
    <div className="pt-[80px] pb-[140px]">
      <div className="container">
        <BreadCrums />
        <FormWrapper
          render={(userInfo, inputFeildArr, handleInput, err, seterr) => (
            <div className="flex items-center justify-between">
              <CheckoutLeft
                userInfo={userInfo}
                inputFeildArr={inputFeildArr}
                handleInput={handleInput}
                err={err}
              />
              <CheckoutRight
                userInfo={userInfo}
                seterr={seterr}
                handleInput={handleInput}
                handleSubmit={() => handleSubmit(userInfo, seterr)}
              />
            </div>
          )}
          inputFeildArr={inputArr}
        />
      </div>
    </div>
  );
};

export default Checkout;

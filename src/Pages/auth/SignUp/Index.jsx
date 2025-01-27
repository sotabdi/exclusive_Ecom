import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../../../assets/Signup/SignUp.png";
import Form from "../../../Components/CommonComponents/FormComponents/Form";
import FormWrapper from "../../../Components/CommonComponents/FormComponents/FormWrapper";
import { infoToast, successToast } from "../../../Helpers/Toast";
import { emailValidator, passValidator } from "../../../Utils/Validation";


const Signup = () => {
  const inputArray = [
    { id: 1, placeholder: "Name", type: "text" },
    { id: 2, placeholder: "Email", type: "email" },
    { id: 3, placeholder: "Password", type: "password" },
  ];

  const [loading, setloading] =useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (userInfo, seterr) => {
    let haserr = false;
    const errors = {};

    if (!userInfo["Email"] || !emailValidator(userInfo["Email"])) {
      errors["Email"] = "Email is required";
      haserr = true;
    }
    if (!userInfo["Name"]) {
      errors["Name"] = "Name is required";
      haserr = true;
    }
    if (!userInfo["Password"] || !passValidator(userInfo["Password"])) {
      errors["Password"] = "password is required";
      haserr = true;
    }
    seterr(errors);

    if (!haserr) {
      setloading(true)
      try {
        const result = await axios.post('http://localhost:3000/app/v1/auth/registration', {
          firstName: userInfo.Name,
          email: userInfo.Email,
          password: userInfo.Password
        })
        if(result.statusText === "OK"){
          infoToast('please check your mail to verify')
          successToast('Registerd successfully')

          setTimeout(()=>{
            navigate(`/otp-verify/${userInfo.Email}`)
          }, 5000)
        }
        setloading(false)
        
      } catch (error) {
        console.log(error);
        
      }finally{
        setloading(false)
      }
    }
  };
  return (
    <div className="pt-[60px] pb-[140px]">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-start-1 col-end-8">
            <picture>
              <img src={SignUp} alt={SignUp} className="w-full object-cover -ml-[190px]"/>
            </picture>
          </div>
          <div className="col-start-8 col-end-12">
            <FormWrapper
              render={(userInfo, inputFeildArr, handleInput, err, seterr) => (
                <Form
                  userInfo={userInfo}
                  inputFeildArr={inputFeildArr}
                  err={err}
                  handleInput={handleInput}
                  handleSubmit={() => handleSubmit(userInfo, seterr)}
                  theme="signup"
                  header="Create an account"
                  title="Enter your details below"
                  loading={loading}
                />
              )}
              inputFeildArr={inputArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import Form from "../../../Components/CommonComponents/FormComponents/Form";
import FormWrapper from "../../../Components/CommonComponents/FormComponents/FormWrapper";
import { emailValidator, passValidator } from "../../../Utils/Validation";
import SignUp from "../../../assets/Signup/SignUp.png";

const SignIn = () => {
  const inputArray = [
    { id: 2, placeholder: "Email", type: "email" },
    { id: 3, placeholder: "Password", type: "password" },
  ];

  const handleSubmit = (userInfo, seterr) => {
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
      console.log("ready to go");
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
                  theme="signin"
                  header="Log in to Exclusive"
                  title="Enter your details below"
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

export default SignIn;

import { useState } from "react";

const FormWrapper = ({render,inputFeildArr}) => {
  // set state dynamically
  const [userInfo, setUserInfo] = useState(
    inputFeildArr.reduce((acc, item) => {
      acc[item.placeholder] = "";
      return acc;
    }, {}) // declearing initial value a blank object
  );

  const [err, seterr] = useState({});

  const handleInput = (e, placeholder) => {
    setUserInfo({
      ...userInfo,
      [placeholder]: e.target.value,
    });
    seterr({
      ...err,
      placeholder: "",
    });
  };
  return render(userInfo, inputFeildArr, handleInput, err, seterr);
};

export default FormWrapper;

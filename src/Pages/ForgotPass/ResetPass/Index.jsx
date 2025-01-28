import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { errorToast, successToast } from "../../../Helpers/Toast";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const params = useParams();
  const user = params.token.split("-");
  const [otp, email] = user;
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const verifyOtp = async () => {
      try {
        const result = await axios.post(
            "http://localhost:3000/app/v1/auth/verify-otp",
            {
              email,
              otp,
            }
          );
          if (result.statusText === "OK") {
            setloading(false);
          }
      } catch (error) {
            navigate('/404')
            console.log(error);
            
      }
    };
    verifyOtp();
  }, [email, otp]);

  const [pass, setpass] = useState({
    pass: null,
    cpass: null,
  });
  const [err, seterr] = useState({
    pass: null,
    cpass: null,
  });

  const handleInput = (e) => {
    seterr({
      ...err,
      [e.target.id]: null,
    });
    setpass({
      ...pass,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async() => {
    if (!pass.pass) {
      seterr({
        ...pass,
        pass: "enter a password",
      });
    }
    if (!pass.cpass) {
      seterr({
        ...pass,
        pass: "enter your password",
      });
    }

    if (pass.pass !== pass.cpass) {
      seterr({
        ...err,
        cpass: "passwod does not matched",
      });
    }

    try {
       const response = await axios.put('http://localhost:3000/app/v1/auth/update-user', {
        password: pass.pass
       })

       if(response.statusText=== "OK"){
        successToast('updated password')
       }
    } catch (error) {
        if(error){
            errorToast('failed')
        }
    }
  };


  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="flex flex-col max-w-md space-y-5 m-auto">
        {loading ? (
          <div className="text-xl">Loading...</div>
        ) : (
          <>
            <input
              type="text"
              placeholder="password"
              name="pass"
              id="pass"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              onChange={handleInput}
            />
            {err.pass && <p className="text-primaryRed">{err.pass}</p>}
            <input
              type="text"
              name="cpass"
              id="cpass"
              placeholder="Confirm Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              onChange={handleInput}
            />
            {err.cpass && <p className="text-primaryRed">{err.cpass}</p>}
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white" onClick={handleSubmit}>
              Confirm
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ResetPasswordForm;

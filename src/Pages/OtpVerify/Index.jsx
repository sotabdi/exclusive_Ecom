import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { errorToast, successToast } from "../../Helpers/Toast";

const OtpVerify = () => {
  const [otp, setotp] = useState(null);
  const params = useParams();
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);
  const navigate = useNavigate();

  const { email } = params;

  const handleOtp = (e) => {
    setotp(e.target.value);
    seterr(null);
  };
  console.log(otp, email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      seterr("please enter your otp");
    }

    try {
      setloading(true);
      const response = await axios.post(
        "http://localhost:3000/app/v1/auth/verify-otp",
        {
          email: email,
          otp: otp,
        }
      );

      if (response.statusText === "OK") {
        successToast("verified successfully");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error) {
      console.log("error from otp verify page", error);
      if (error.response.statusText === "Unauthorized") {
        errorToast(error.response.data.message)
        seterr(error.response.data.message)
      }
    } finally {
      setloading(false);
    }
  };

  const handleResendOtp = async()=>{
    try {
        const response = await axios.post("http://localhost:3000/app/v1/auth/resend-otp" , {
            email
        })
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section className="pt-[80px] pb-[50px]">
      <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
          <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
        </div>
        <div className="flex flex-col max-w-md space-y-5">
          <input
            type="text"
            placeholder="otp"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            onChange={handleOtp}
          />
          {err && <p className="text-red-500">{err}</p>}
          {loading ? (
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Loading ...
            </button>
          ) : err === "otp expired" || null ? (
            <button
              onClick={handleResendOtp}
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
            >
              Resend
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;

import axios from "axios"
import { useState } from "react"
import { successToast } from "../../Helpers/Toast"
import { emailValidator } from "../../Utils/Validation"


const ResetPassword = () => {

    const [email, setemail] = useState(null)
    const [err, seterr] = useState(null)

    const handleInput = (e)=>{

        setemail(e.target.value)
    }
    console.log(email);
    

    const handleSubmit = async()=>{
        if(!email || !emailValidator(email)){
            seterr('invalid email')
        }
        try {
            const response = await axios.post('http://localhost:3000/app/v1/auth/reset-password', {
                email
            })
            
            if(response.statusText === "OK"){
                successToast('check your email')
            }
            
        } catch (error) {
            console.log(error);
            
        } finally{
            seterr(null)
            setemail(null)
        }
    }
  return (
    <section className="pt-[120px] pb-[80px]">
        <div className="flex flex-col max-w-md space-y-5 m-auto">
        <input
            type="text"
            placeholder="Enter your Email"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            onChange={handleInput}
          />
          {err && <p>{err}</p>}
          <button
              onClick={handleSubmit}
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
            >
              Confirm
            </button>
        </div>
    </section>
  )
}

export default ResetPassword;
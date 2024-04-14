import Cookies from "js-cookie"
import axios from "axios"
import './index.css'
import envelope from "../../images/envelope.png"
import search from "../../images/magnifying-glass-solid.svg"


const FinalHomeBody = () => {

  const resendEmail = async()=>{
    try {
      const emailId = Cookies.get("email");
      console.log(emailId)
      const response = await axios.post("https://dribble-mern-stack-app.onrender.com/api/users/sendemail",{emailId});
      console.log(response,"email resend successfully")
    } catch (error) {
      console.log(error.message,"at catch client")
    }
  }

  return (
    <div className="flex flex-col items-center mt-5 text-center p-[1em]">
        <div className='search-container-mobile bg-slate-200'>
          <img src={search} className={`h-5 mr-3`} alt='search' />
          <input type='search' className="search-input-mobile bg-slate-200" placeholder='Search'/>
        </div>
        <h1 className="text-4xl font-bold mb-3">Please verify your email...</h1>
        <img src={envelope} alt='' className="h-[90px] mb-3" />
        <p className="text-zinc-500 mb-3">Please verify your email address. We've sent a confirmation email to:</p>
        <p className="text-2xl font-bold mb-3">{Cookies.get("email")}</p>
        <p className="text-zinc-500 mb-3">Click the confirmation link in that email to begin using Dribbble.</p>
        <p className="text-zinc-500 mb-3">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter.If you still don't see it, you can <span className="text-red-500 font-bold cursor-pointer" onClick={resendEmail}>resend the confirmation email</span>.
        </p>
        <p className="text-zinc-500 mb-5">Wrong email address? <span className="text-red-500 font-bold  cursor-pointer">Change it.</span></p>
    </div>
  )
}

export default FinalHomeBody


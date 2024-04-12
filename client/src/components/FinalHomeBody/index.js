import Cookies from "js-cookie"
import './index.css'
import envelope from "../../images/envelope.png"


const FinalHomeBody = () => {
  return (
    <div className="flex flex-col items-center mt-5 text-center p-[1em]">
        <h1 className="text-4xl font-bold mb-3">Please verify your email...</h1>
        <img src={envelope} alt='' className="h-[90px] mb-3" />
        <p className="text-zinc-500 mb-3">Please verify your email address. We've sent a confirmation email to:</p>
        <p className="text-2xl font-bold mb-3">{Cookies.get("email")}</p>
        <p className="text-zinc-500 mb-3">Click the confirmation link in that email to begin using Dribbble.</p>
        <p className="text-zinc-500 mb-3">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter.If you still don't see it, you can <span className="text-red-500 font-bold">resend the confirmation email</span>.
        </p>
        <p className="text-zinc-500 mb-5">Wrong email address? <span className="text-red-500 font-bold">Change it.</span></p>
    </div>
  )
}

export default FinalHomeBody


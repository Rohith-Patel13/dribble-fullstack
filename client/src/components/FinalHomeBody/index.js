import Cookies from "js-cookie"
import './index.css'
import envelope from "../../images/envelope.png"


const FinalHomeBody = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
        <h1>Please verify your email...</h1>
        <img src={envelope} alt='' />
        <p>Please verify your email address. We've sent a confirmation email to:</p>
        <p>{Cookies.get("email")}</p>
        <p>Click the confirmation link in that email to begin using Dribbble.</p>
        <p>
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter.If you still don't see it, you can <span>resend the confirmation email</span>.
        </p>
        <p>Wrong email address? <span>Change it.</span></p>
    </div>
  )
}

export default FinalHomeBody

import Cookies from "js-cookie"
import {useEffect} from "react"
import axios from "axios"
import './index.css'

const Home = () => {
  const emailId = Cookies.get("email");

  useEffect(()=>{

    const sendEmail = async ()=>{
      try {
        const response = await axios.post("http://localhost:8000/api/users/sendemail",{emailId});
        console.log(response)
      } catch (error) {
        console.log(error.message)
      }
    }
    sendEmail()
  })

  return (
    <div>
      {emailId}
    </div>
  )
}

export default Home

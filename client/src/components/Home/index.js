import Cookies from "js-cookie"
import {useEffect} from "react"
import axios from "axios"
import './index.css'
import FinalHeader from "../FinalHeader/index"
import FinalHomeBody from "../FinalHomeBody/index"
import Footer from "../Footer/index"


const Home = () => {
  const emailId = Cookies.get("email");
  console.log(emailId)

  useEffect(()=>{


    const sendEmail = async ()=>{
      try {

        const response = await axios.post("http://localhost:8000/api/users/sendemail",{emailId});
        console.log(response)
      } catch (error) {
        console.log(error.message,"at catch client")
      }
    };
    sendEmail();
  },[emailId]); 
  
  return (
    <div className="home-bg">
      <FinalHeader />
      <FinalHomeBody />
      <Footer/>
    </div>
  )
}

export default Home

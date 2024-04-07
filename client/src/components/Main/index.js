
import {Routes,Route} from "react-router-dom"
import Login from "../Login/index"
import Profile from "../Profile"
import "./index.css"

const Main = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />  
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  )
}

export default Main


import {Routes,Route} from "react-router-dom"
import Login from "../Login/index"
import Profile from "../Profile/index"
import "./index.css"
import Options from "../Options/index"

const Main = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />  
      <Route path="/profile" element={<Profile/>} />
      <Route path="/options" element={<Options/>} />
    </Routes>
  )
}

export default Main

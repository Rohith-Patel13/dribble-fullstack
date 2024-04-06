
import {Routes,Route} from "react-router-dom"
import Login from "../Login/index"
import "./index.css"

const Main = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />  
    </Routes>
  )
}

export default Main

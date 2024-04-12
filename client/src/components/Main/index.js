
import {Routes,Route} from "react-router-dom"
import Login from "../Login/index"
import Profile from "../Profile/index"
import "./index.css"
import Options from "../Options/index"
import Home from '../Home/index'
import NotFound from "../NotFound/index"

import ProtectedRoute from "../ProtectedRoute/index"



const Main = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />  
      <Route path="/profile"  element={<ProtectedRoute element={<Profile />} /> } />
      <Route path="/options"  element={<ProtectedRoute element={<Options />} />} />
      <Route path="/"  element={<ProtectedRoute element={<Home />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Main

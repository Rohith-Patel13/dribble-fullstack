import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  // console.log(props,"protected route")  
  const {element} = props
  const token = Cookies.get("jwtToken");
  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;



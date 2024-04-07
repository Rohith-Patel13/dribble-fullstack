import Cookies from "js-cookie"

import './index.css'

const Home = () => {
  const emailId = Cookies.get("email");
  return (
    <div>
      {emailId}
    </div>
  )
}

export default Home


import './index.css'
import mainLogo from "../../images/main-logo.png"


const Header = () => {
  return (
    <header>
        <img src={mainLogo} className='p-3' alt='mainLogo' />
    </header>
  )
}

export default Header

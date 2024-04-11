import './index.css'
import blackLogo from "../../images/black-main-logo.png"

const FinalHeader = () => {
  return (
    <nav>
        <div className='flex'>
            <img src={blackLogo} alt='blackLogo' />
            <div className='flex'>
                <p>Inspiration</p>
                <p>Find Work</p>
                <p>Learn Design</p>
                <p>Go Pro</p>
                <p>Hire Designers</p>
            </div>
        </div>

        <div>
            <div className='mt-3 shadow p-[12px] flex items-center search-input-bg'>
                <img src={search} className={`h-5 mr-2 search-icon ${isInDarkMode?"darkImage":""} `} alt='search' />
                <input type='search' className={`w-[500px] p-1 search-input ${isInDarkMode?"darkmode-bg":""}`} placeholder='Search our articles'/>
            </div>
        </div>
    </nav>
  )
}

export default FinalHeader

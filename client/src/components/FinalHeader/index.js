import Cookies from "js-cookie"
import './index.css'
import blackLogo from "../../images/black-main-logo.png"
import search from "../../images/magnifying-glass-solid.svg"


const FinalHeader = () => {
  return (
    <nav className="flex justify-between items-center p-[1em]">
        <div className='flex w-[100%]'>
            <img src={blackLogo} alt='blackLogo' />
            <div className='flex justify-evenly w-[50%]'>
                <p>Inspiration</p>
                <p>Find Work</p>
                <p>Learn Design</p>
                <p>Go Pro</p>
                <p>Hire Designers</p>
            </div>
        </div>

        <div className="flex items-center">
            <div className='flex items-center bg-slate-400'>
                <img src={search} className={`h-5`} alt='search' />
                <input type='search' className="w-[150px]" placeholder='Search'/>
            </div>
            <img src={Cookies.get("imageurl")} className="h-[25px] w-[25px] profile-image" alt="P" />
            <button className="btn btn-danger">Upload</button>
        </div>
    </nav>
  )
}

export default FinalHeader

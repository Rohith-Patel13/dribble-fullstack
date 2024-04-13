import Cookies from "js-cookie"
import {useState} from "react"
import './index.css'
import blackLogo from "../../images/black-main-logo.png"
import search from "../../images/magnifying-glass-solid.svg"
import suitcase from "../../images/suitcase.png"
import bars from "../../images/bars-solid.svg"
import xmark from "../../images/xmark-solid.svg"



const FinalHeader = () => {

  const [isNavOpen,setIsNavOpen] = useState(false)  
  
  const handleBarClick =()=>{
    setIsNavOpen(!isNavOpen)
  }  

  return (
    <>
        <nav className="main-nav flex justify-between items-center p-[1em]">
            <div className='flex items-center w-[100%]'>
                <img src={blackLogo} alt='blackLogo' />
                <img src={isNavOpen?xmark:bars} onClick={handleBarClick}
                className="nav-icon mr-3 ml-3 cursor-pointer
                h-[20px] w-[25px]" alt="bars" />
                <div className='desktop-header w-[55%]'>
                    <p className="text-slate-400 font-bond cursor-pointer">Inspiration</p>
                    <p className="text-slate-400 font-bond cursor-pointer">Find Work</p>
                    <p className="text-slate-400 font-bond cursor-pointer">Learn Design</p>
                    <p className="text-slate-400 font-bond cursor-pointer">Go Pro</p>
                    <p className="text-slate-400 font-bond cursor-pointer">Hire Designers</p>
                </div>
            </div>

            <div className="right-nav-els">
                <div className='search-container bg-slate-200'>
                    <img src={search} className={`h-5 mr-3`} alt='search' />
                    <input type='search' className="search-input bg-slate-200" placeholder='Search'/>
                </div>
                <img src={suitcase} alt="" className="h-[30px] w-[25px]" />
                <img src={Cookies.get("imageurl")} className="h-[25px] w-[25px] profile-image" alt="P" />
                <button className="btn btn-danger">Upload</button>
            </div>
        </nav>

        {
            isNavOpen && (
                <div className='mobile-header mt-3 mb-2'>
                    <p className="text-slate-400 mb-2 font-bond cursor-pointer">Inspiration</p>
                    <p className="text-slate-400 mb-2 font-bond cursor-pointer">Find Work</p>
                    <p className="text-slate-400 mb-2 font-bond cursor-pointer">Learn Design</p>
                    <p className="text-slate-400 mb-2 font-bond cursor-pointer">Go Pro</p>
                    <p className="text-slate-400 mb-2 font-bond cursor-pointer">Hire Designers</p>
                </div>
            )
        }
        <hr />
    </>
  )
}

export default FinalHeader

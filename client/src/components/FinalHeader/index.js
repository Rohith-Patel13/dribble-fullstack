import Cookies from "js-cookie"
import './index.css'
import blackLogo from "../../images/black-main-logo.png"
import search from "../../images/magnifying-glass-solid.svg"
import suitcase from "../../images/suitcase.png"


const FinalHeader = () => {
  return (
    <nav className="flex justify-between items-center p-[1em] border-b-2">
        <div className='flex w-[100%]'>
            <img src={blackLogo} alt='blackLogo' />
            <div className='flex justify-evenly w-[55%]'>
                <p className="text-slate-400 font-bond cursor-pointer">Inspiration</p>
                <p className="text-slate-400 font-bond cursor-pointer">Find Work</p>
                <p className="text-slate-400 font-bond cursor-pointer">Learn Design</p>
                <p className="text-slate-400 font-bond cursor-pointer">Go Pro</p>
                <p className="text-slate-400 font-bond cursor-pointer">Hire Designers</p>
            </div>
        </div>

        <div className="flex items-center justify-evenly w-[40%]">
            <div className='flex items-center rounded bg-slate-200
             pt-[0.6em] pb-[0.6em] pl-3 w-[150px]
            '>
                <img src={search} className={`h-5 mr-3`} alt='search' />
                <input type='search' className="w-[105px] bg-slate-200" placeholder='Search'/>
            </div>
            <img src={suitcase} alt="" className="h-[30px] w-[25px]" />
            <img src={Cookies.get("imageurl")} className="h-[25px] w-[25px] profile-image" alt="P" />
            <button className="btn btn-danger">Upload</button>
        </div>
    </nav>
  )
}

export default FinalHeader

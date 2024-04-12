import './index.css'

import mainLogo from "../../images/main-logo.png"
import instagram from "../../images/instagram.svg"
import pinterest from "../../images/pinterest.svg"
import facebook from "../../images/square-facebook.svg"
import twitter from "../../images/twitter.svg"
import dribbble from "../../images/dribbble.svg"


const Footer = () => {
  return (
    <div className='p-[1em] footer-bg bg-slate-100 flex flex-col justify-between'>
      <div className='p-[1em] footer-all-desc-bg'>
        <div className='flex flex-col'>
          <img className='h-[25px] w-[60px]' src={mainLogo} alt='' />
          <p>dribbble is the world's leading community for creatives to share,grow, and ger hired.</p>
          <div className='flex'>
            <img className='h-[25px] w-[25px]' src={dribbble} alt='' />
            <img className='h-[25px] w-[25px]' src={twitter} alt='' />
            <img className='h-[25px] w-[25px]' src={facebook} alt='' />
            <img className='h-[25px] w-[25px]' src={instagram} alt='' />
            <img className='h-[25px] w-[25px]' src={pinterest} alt='' />
          </div>
        </div>

        <div className='designers'>
          <h1 className='font-bold'>For designers</h1>
          <p>Go Pro!</p>
          <p>Explore design work</p>
          <p>Design blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Weekly Warm-Up</p>
          <p>Refer a Friend</p>
          <p>Code of conduct</p>
        </div>

        <div className='hire-designers-brands'>
          <div className='hire-designers'>
            <h1 className='font-bold'>Hire designers</h1>
            <p>Post a job opening</p>
            <p>Post a freelance project</p>
            <p>Search for designers</p>
          </div>
          <div className='brands'>
            <h1 className='font-bold'>Brands</h1>
            <p>Advertise with us</p>
          </div>
        </div>

        <div className='company'>  
          <h1 className='font-bold'>Company</h1> 
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media kit</p>
          <p>Testimonials</p>
          <p>API</p>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>       
        </div>

        <div className='directories-designassets'>    
           <div className='directories'>
              <h1 className='font-bold'>Directories</h1>
              <p>Design jobs</p>
              <p>Designers for hire</p>
              <p>Freelance designers for hire</p>
              <p>Tags</p>
              <p>Places</p>
           </div>
           <div className='designassets'>
              <h1 className='font-bold'>Design assets</h1>
              <p>Dribbble Marketplace</p>
              <p>Creative Market</p>
              <p>Freelance designers for hire</p>
              <p>Tags</p>
           </div>
        </div>

        <div className='designResources'> 
          <h1 className='font-bold'>Design Resources</h1>
          <p>Freelancing</p>
          <p>Design Hiring</p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Industry Trends</p>
        </div>
      </div>

      <hr className="footer-line mt-5" />
      <div className="footer-policy flex justify-between w-[100%]">
        <p>2023 Dribbble.All rights reserved.</p>
        <p>20,501,853 shots dribbbled</p>
      </div>
    </div>
  )
}

export default Footer

import './index.css'

import mainLogo from "../../images/main-logo.png"
import instagram from "../../images/instagram.svg"
import pinterest from "../../images/pinterest.svg"
import facebook from "../../images/square-facebook.svg"
import twitter from "../../images/twitter.svg"
import dribbble from "../../images/dribbble.svg"
import dribbblered from "../../images/dribbble-red.svg"



const Footer = () => {
  return (
    <div className='p-[1em] footer-original-bg bg-slate-100'>
      <div className='p-[1em] footer-all-desc-bg'>
        <div className='flex flex-col contact-footer m-3'>
          <img className='h-[25px] w-[80px] mb-3' src={mainLogo} alt='' />
          <p className='mb-3'>dribbble is the world's leading community for creatives to share,grow, and ger hired.</p>
          <div className='flex'>
            <img className='mr-3 h-[25px] w-[25px]' src={dribbble} alt='' />
            <img className='mr-3 h-[25px] w-[25px]' src={twitter} alt='' />
            <img className='mr-3 h-[25px] w-[25px]' src={facebook} alt='' />
            <img className='mr-3 h-[25px] w-[25px]' src={instagram} alt='' />
            <img className='mr-3 h-[25px] w-[25px]' src={pinterest} alt='' />
          </div>
        </div>

        <div className='designers m-3'>
          <h1 className='font-bold mb-2'>For designers</h1>
          <p className='mb-2'>Go Pro!</p>
          <p className='mb-2'>Explore design work</p>
          <p className='mb-2'>Design blog</p>
          <p className='mb-2'>Overtime podcast</p>
          <p className='mb-2'>Playoffs</p>
          <p className='mb-2'>Weekly Warm-Up</p>
          <p className='mb-2'>Refer a Friend</p>
          <p className='mb-2'>Code of conduct</p>
        </div>

        <div className='hire-designers-brands m-3'>
          <div className='hire-designers'>
            <h1 className='font-bold mb-2'>Hire designers</h1>
            <p className='mb-2'>Post a job opening</p>
            <p className='mb-2'>Post a freelance project</p>
            <p className='mb-2'>Search for designers</p>
          </div>
          <div className='brands mt-4'>
            <h1 className='font-bold mb-2'>Brands</h1>
            <p className='mb-2'>Advertise with us</p>
          </div>
        </div>

        <div className='company m-3'>  
          <h1 className='font-bold mb-2'>Company</h1> 
          <p className='mb-2'>About</p>
          <p className='mb-2'>Careers</p>
          <p className='mb-2'>Support</p>
          <p className='mb-2'>Media kit</p>
          <p className='mb-2'>Testimonials</p>
          <p className='mb-2'>API</p>
          <p className='mb-2'>Terms of service</p>
          <p className='mb-2'>Privacy policy</p>
          <p className='mb-2'>Cookie policy</p>       
        </div>

        <div className='directories-designassets m-3'>    
           <div className='directories'>
              <h1 className='font-bold mb-2'>Directories</h1>
              <p className='mb-2'>Design jobs</p>
              <p className='mb-2'>Designers for hire</p>
              <p className='mb-2'>Freelance designers for hire</p>
              <p className='mb-2'>Tags</p>
              <p className='mb-2'>Places</p>
           </div>
           <div className='designassets'>
              <h1 className='font-bold mb-2'>Design assets</h1>
              <p className='mb-2'>Dribbble Marketplace</p>
              <p className='mb-2'>Creative Market</p>
              <p className='mb-2'>Freelance designers for hire</p>
              <p className='mb-2'>Tags</p>
           </div>
        </div>

        <div className='designResources m-3'> 
          <h1 className='font-bold mb-2'>Design Resources</h1>
          <p className='mb-2'>Freelancing</p>
          <p className='mb-2'>Design Hiring</p>
          <p className='mb-2'>Design Portfolio</p>
          <p className='mb-2'>Design Education</p>
          <p className='mb-2'>Creative Process</p>
          <p className='mb-2'>Design Industry Trends</p>
        </div>
      </div>

      <hr className="footer-line mt-2 mb-4" />
      <div className="mb-4 footer-policy flex justify-between w-[100%]">
        <p className='rights-reserved'>2023 Dribbble.All rights reserved.</p>
        <div className='flex items-center'>
          <p>20,501,853 shots dribbbled</p>
          <img src={dribbblered} className='ml-3 h-[20px] w-[20px]'
           alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer

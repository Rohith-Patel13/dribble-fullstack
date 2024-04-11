import { useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
// import {useDispatch} from "react-redux"
// import { ActionCreators } from '../../redux/slice'
import './index.css'
import camera from "../../images/camera-solid.svg"
import Header from '../Header/index'


const Profile = () => {
  // const dispatch=useDispatch()
  // const {imageUploaded} = ActionCreators
  const navigate = useNavigate();
  const uploadInputRef = useRef(null)
  const [imageChoosen,setImageChoosen] = useState(Cookies.get("imageurl"))
  


  const imageUploadClick = ()=>{
    // console.log("Image Upload Click")
    // console.log(uploadInputRef)
    uploadInputRef.current.click()
  }

  const inputFileChange =(event) => {
    // console.log(event.target)
    // console.log(event.target.value)
    // console.log(event)
    // console.log(event.target.files)
    // console.log(event.target.files[0])
    setImageChoosen(event.target.files[0])
    Cookies.set("imageurl",URL.createObjectURL(event.target.files[0]),{expires:1})
    // dispatch(imageUploaded({imageUrl:URL.createObjectURL(event.target.files[0])}))
  }


  const nextButtonClicked = ()=>{
    navigate("/options")
  }

  console.log(imageChoosen)
  return (
    <div className='profile-bg'>
      <Header />

      <div className='bg-profile'>
        <div>
          <div className='text-left'>
            <h1 className='text-4xl font-bold mb-3'>Welcome! Let's create your profile</h1>
            <p className='mb-5'>Let others get to know you better!You can do these later</p>
          </div>
          <div className='mt-3'>
            <h1 className='text-2xl font-bold mb-3'>Add an avatar</h1>
            <div className='image-upload-container
             mb-5
             cursor-pointer' onClick={imageUploadClick}>
              {
                imageChoosen!==undefined?(
                  <img src={Cookies.get("imageurl")} alt='camera' className='upload-image' />
                ):(
                  <div className='camera-bg'>
                    <img src={camera} alt='camera' className='h-[25px] w-[25px]' />
                  </div>
                )
              }

              
              <button type='button' className='btn choose-image'>Choose image</button>
               
              

              <input type='file'
              className='text-slate-950 file-upload'
              onChange={inputFileChange}
              ref={uploadInputRef}
              />

            </div>
          </div>

          <div className='footer-bg'>
            <h1 className='text-2xl font-bold mb-3'>Add your location</h1>
            <input type='location' className='w-[100%] mb-1'  placeholder='Enter a location' />
            <hr className='input-horizontal mb-5' />

            <button type='button' className='btn btn-danger'
            onClick={nextButtonClicked}
            >Next</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile

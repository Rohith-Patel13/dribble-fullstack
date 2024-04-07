import { useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
// import {useDispatch} from "react-redux"
// import { ActionCreators } from '../../redux/slice'
import './index.css'
import camera from "../../images/camera-solid.svg"


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
    navigate("/")
  }

  console.log(imageChoosen)
  return (
    <div className='profile-bg'>
      <h1>dribbble</h1>
      <h1>Welcome! Let's create your profile</h1>
      <p>Let others get to know you better!You can do these later</p>
      <h1>Add an avatar</h1>
      <div className='image-upload-container cursor-pointer' onClick={imageUploadClick}>
        {
          imageChoosen!==undefined?(
            <img src={Cookies.get("imageurl")} alt='camera' className='upload-image' />
          ):(
            <div className='camera-bg'>
              <img src={camera} alt='camera' className='h-[25px] w-[25px]' />
            </div>
          )
        }
        <input type='file'
        onChange={inputFileChange}
        ref={uploadInputRef} />
      </div>
      <h1>Add your location</h1>
      <input type='text' placeholder='Enter a location' />

      <button type='button' className='btn btn-danger'
      onClick={nextButtonClicked}
      >Next</button>
    </div>
  )
}

export default Profile

import { useState } from 'react';
import {useNavigate,Navigate} from "react-router-dom"
// import {useDispatch} from "react-redux"
import Cookies from "js-cookie"
import axios from "axios"
// import {ActionCreators} from "../../redux/slice"
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import loginBanner from "../../images/login-banner.png"
import triangleExclamation from "../../images/red-exclamatory.jpg"



const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  // const {loggedInUserData} = ActionCreators
  const [formData, setFormData] = useState({name: '',username: '',
  email: '',password: '',isChecked: false,});
  const [formDataLogin, setFormDataLogin] = useState({ email: '', password: '' });

  const [validationErrors, setValidationErrors] = useState({});
  const [submissionText,setSubmissionText] = useState({text:"",isError:false});
  const [isLoginPage,setIsLoginPage] = useState(false);
  const [isAlreadyExistsAt,setIsAlreadyExistsAt] = useState(null)



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));

  };

  const handleLoginEvent =(e)=>{
    const {name,value} = e.target
    setFormDataLogin((prevLoginFormData) => ({
      ...prevLoginFormData,
      [name]: value,
    }));
  }

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required*';
    }

    // Validate Username
    if (!formData.username.trim()) {
      errors.username = 'Username is required*';
    }

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email address*';
    }

    // Validate password
    if (formData.password.length<6) {
      errors.password = 'Password must be at least 6 characters*';
    }

    // Validate password
    if (!formData.isChecked) {
      errors.isChecked = 'Please agree to the terms*';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // true or false
  };
  

  const validateFormLogin=()=>{
    const errors = {};

    const emailRegex = /\S+@\S+\.\S+/
    if (!formDataLogin.email.trim() || !emailRegex.test(formDataLogin.email.trim())) {
      errors.email = 'Invalid email address*';
    }

    // Validate password
    if (formDataLogin.password.length<6) {
      errors.password = 'Password must be at least 6 characters*';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // true or false

  }



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (validateForm()){
        const response = await axios.post('http://localhost:8000/api/users/create',formData)
        console.log(response,"response")
        if (response.status===201) {
          // Handle successful registration, maybe redirect to another page
          console.log("Registered success")
          setSubmissionText({text:"* Registered Successfully",isError:false})
          setIsAlreadyExistsAt(null)
        }else if(response.data.errorMessage){
          console.log(response.data.errorMessage.errorText)
          setSubmissionText({text:`* ${response.data.errorMessage.errorText}`,isError:true})
          setIsAlreadyExistsAt(response.data.errorMessage.at)
        }
        else {
          // Handle registration failure
          console.log(response,"Registeration failed")
          setSubmissionText({text:"* Registeration failed",isError:true})
        }
      }
    } catch (error) {
      console.log('Error at Catch:', error.message);
      setSubmissionText({text:"* Something went wrong,Please Try again",isError:true})
    }
  };


  const handleSignInRegister =()=>{
    setIsLoginPage(!isLoginPage)
    setSubmissionText({text:"",isError:false})
    setFormData({name: '',username: '',
    email: '',password: '',isChecked: false,})
    setFormDataLogin({ email: '', password: '' })
    setValidationErrors({})
    setIsAlreadyExistsAt(null)
  }

  const handleLoginSubmit = async(event)=>{
    event.preventDefault()

    try {
      if (validateFormLogin()){
        const response = await axios.post('http://localhost:8000/api/users/login',formDataLogin)
        console.log(response,"response")
        if (response.status===200 && !response.data.errorMessage) {
          // Handle successful registration, maybe redirect to another page
          console.log("Login success")
          console.log(response.data.userData)
          // dispatch(loggedInUserData(response.data.userData))
          const userEmail = response.data.userData.email
          Cookies.set("email",userEmail,{ expires: 0.5 })// Created a cookie that expires in half a day (12 hours) from now, valid across the entire site
          Cookies.set("jwtToken",response.data.jwtToken,{ expires: 0.5 })
          navigate("/profile")
          
        }else if(response.data.errorMessage){
          console.log(response.data.errorMessage)
          setSubmissionText({text:`* ${response.data.errorMessage.errorText}`,isError:true})
          setIsAlreadyExistsAt(response.data.errorMessage.at)
        }
        else {
          // Handle registration failure
          console.log(response,"Login failed")
          setSubmissionText({text:`* Login failed,Try again with correct credentials`,isError:true})
        }
      }
    } catch (error) {
      console.log('Error at Catch:', error.message);
      setSubmissionText({text:"* Something went wrong,Please Try again",isError:true})
    }
  }

  const tokenValue = Cookies.get("jwtToken")
  if(tokenValue){
    return <Navigate to="/profile" /> // In Class Components We Use "Redirect" Component instead of "Navigate"
  }

  const clearClicked=()=>{
    setSubmissionText({text:"",isError:false})
    setFormData({name: '',username: '',
    email: '',password: '',isChecked: false,})
    setFormDataLogin({ email: '', password: '' })
    setValidationErrors({})
    setIsAlreadyExistsAt(null)
  }


  return (
    // <div className="root-bg">
      <div className="login-bg">
          <img src={loginBanner} alt="loginBanner"
          className='image-login'
          />

          <div className='main-form-bg'>
              <p className='member mb-3'>{isLoginPage?"Not a member?":"Already a member?"}<span className='cursor-pointer sign-in-text' onClick={handleSignInRegister}>{isLoginPage?" Register":" Sign In"}</span></p>
              <h1 className='bold-text text-[24px] mt-3 mb-3'>{isLoginPage?"Login to Dribbble":"Sign up to Dribbble"}</h1>
              <p className={submissionText.isError?"warning-text":"success-text"}>{submissionText.text}</p>
              {
                isLoginPage ? (
                <>
                  
                  <form onSubmit={handleLoginSubmit}>
                    <div className='email-bg flex flex-col'>
                        <div className='flex items-center mt-3'>
                          {
                            validationErrors.email|| isAlreadyExistsAt==="email" ?(
                              <img src={triangleExclamation} 
                              className='h-[15px] w-[15px]'
                              alt='triangleExclamation' />
                            ):null
                          }

                        <label className='cursor-pointer bold-text text-[18px]' htmlFor='emailLoginId'>Email</label>
                        </div>

                        <input type='email' id='emailLoginId'
                        name="email"
                        value={formDataLogin.email}
                        onChange={handleLoginEvent}
                        className='input-range form-control bg-neutral-100 each-input'
                        placeholder='Enter Your Email' />    
                        <p className='error-text'>{validationErrors.email}</p>                 
                    </div>
                    <div className='password-bg flex flex-col'>
                      <div className='flex items-center mt-3'>
                        {
                          validationErrors.password || isAlreadyExistsAt==="password"?(
                            <img src={triangleExclamation} 
                            className='h-[15px] w-[15px]'
                            alt='triangleExclamation'
                            />
                          ):null
                        }

                      <label className='cursor-pointer bold-text text-[18px]' htmlFor='passwordLoginId'>Password</label>
                      </div>
                      <input type='password' id='passwordLoginId'
                        name="password"
                        value={formDataLogin.password}
                        onChange={handleLoginEvent}
                        className='input-range form-control bg-neutral-100 each-input'
                        placeholder='6+ characters' />   
                      <p className='error-text'>{validationErrors.password}</p>                
                    </div>
                    <div className='flex mt-3'>
                    <button type='submit' className='btn btn-danger mr-3'>Login</button>
                    <button type='button' className='btn btn-danger'
                    onClick={clearClicked}
                    >Clear all Fields</button>
                    </div>

                  </form>
                </>
                ):(
                <>
                <form className='form-bg' onSubmit={handleSubmit}>
                  <div className='name-username-bg'>
                    <div className='name-bg flex flex-col mr-3'>
                        <div className='flex items-center'>
                          {
                            validationErrors.name?(
                              <img src={triangleExclamation} 
                              className='h-[15px] w-[15px] exclamatory-icon'
                              alt='triangleExclamation'
                              />
                            ):null
                          }

                          <label className='cursor-pointer bold-text text-[18px]' htmlFor='nameId'>Name</label>
                        </div>

                        <input type='text' id='nameId'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control ${validationErrors.name?"bg-red-200":"bg-neutral-100"}`}
                        placeholder='Enter Your Name' />
                        <p className='error-text'>{validationErrors.name}</p>
                    </div>
                    <div className='username-bg flex flex-col'>
                      <div className='flex items-center'>
                        {
                          validationErrors.username || isAlreadyExistsAt==="username" ?(
                            <img src={triangleExclamation} 
                            className='h-[15px] w-[15px]'
                            alt='triangleExclamation' />
                          ):null
                        }

                        <label className='cursor-pointer bold-text text-[18px]' htmlFor='usernameId'>User Name</label>
                      </div>
                        <input type='text' id='usernameId'
                        
                        className={`form-control ${validationErrors.username || isAlreadyExistsAt==="username"?"bg-red-200":"bg-neutral-100"}`}
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder='Enter Your User Name' />
                        <p className='error-text'>{validationErrors.username}</p>
                    </div>
                  </div>

                  
                  <div className='email-bg flex flex-col'>
                        <div className='flex items-center mt-3'>
                          {
                            validationErrors.email || isAlreadyExistsAt==="email"?(
                              <img src={triangleExclamation} 
                              className='h-[15px] w-[15px]'
                              alt='triangleExclamation' />                         
                            ):null
                          }
                          <label className='cursor-pointer bold-text text-[18px]' htmlFor='emailId'>Email</label>
                        </div>
                        <input type='email' id='emailId'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-range form-control ${validationErrors.email || isAlreadyExistsAt==="email"?"bg-red-200":"bg-neutral-100"}`}
                        placeholder='Enter Your Email' />
                        <p className='error-text'>{validationErrors.email}</p>
                  </div>
                  

                  
                  <div className='password-bg flex flex-col'>
                        <div className='flex items-center mt-3'>
                          {
                            validationErrors.password?(
                              <img src={triangleExclamation} 
                              className='h-[15px] w-[15px]'
                              alt='triangleExclamation' />
                            ):null
                          }

                        <label className='cursor-pointer bold-text text-[18px]' htmlFor='passwordId'>Password</label>
                        </div>
                        <input type='password' id='passwordId'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`input-range form-control ${validationErrors.password
                          ?"bg-red-200":"bg-neutral-100"}`}
                        placeholder='6+ characters' />
                        <p className='error-text'>{validationErrors.password}</p>
                  </div>
                  

                  <div className='flex flex-col mt-3'>
                    <div className='flex items-start'>
                      <input type='checkbox'
                      name="isChecked"
                      checked={formData.isChecked}
                      onChange={handleChange}
                      className='cursor-pointer h-[30px] w-[30px]
                        bg-neutral-100 mr-3 each-input' />
                      <p>Creating an account means you're okay with our <span className='violate-text'>Terms of Service, Privacy Policy,</span> and our default <span className='violate-text'>Notification Settings.</span></p>
                    </div>

                    <p className='error-text'>{validationErrors.isChecked}</p>
                  </div>
                  <div className='flex mt-3'>
                    <button type='submit' className='btn btn-danger mr-3'>Create an Account</button>
                    <button type='button' className='btn btn-danger'
                    onClick={clearClicked}
                    >Clear all Fields</button>
                  </div>

                  <p className='mt-3 ash-text'>This site is protected by reCAPTCHA and the Google <span className='violate-text'>Privacy Policy</span> and <span className='violate-text'>Notification Settings.</span></p>
                </form>
              </>
                )
              }
          </div>
      </div>
    // </div>
  )
}

export default Login

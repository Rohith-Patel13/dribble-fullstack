import { useState } from 'react';
import axios from "axios"
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import loginBanner from "../../images/login-banner.png"


const Login = () => {
  const [formData, setFormData] = useState({name: '',username: '',
  email: '',password: '',isChecked: false,});

  const [validationErrors, setValidationErrors] = useState({});

  const [submissionText,setSubmissionText] = useState(null)



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));

  };

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
      errors.password = 'Please agree to the terms*';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // true or false
  };


  const handleSubmit = async (event) => {
    event.preventDefault();



    try {
      if (validateForm()){
        const response = await axios.post('http://localhost:8000/api/users/create',formData)
        console.log(response,"response")
        if (response.status===201) {
          // Handle successful registration, maybe redirect to another page
          console.log("Registered success")
          setSubmissionText("Registered success")
        }else if(response.data.errorMessage){
          console.log(response.data.errorMessage)
          setSubmissionText(response.data.errorMessage)
        }
        else {
          // Handle registration failure
          console.log(response,"Registered failed")
          setSubmissionText("Registered failed")
        }
      }
    } catch (error) {
      console.log('Error at Catch:', error.message);
      setSubmissionText("Something went wrong,Please Try again")
    }
  };

  return (
    <div className="login-bg">
        <img src={loginBanner} alt="loginBanner"
        className='h-[600px]'  />
        <div className='main-form-bg'>
            <p>Already a member?<span className='sign-in-text'>Sign in</span></p>
            <h1>Sign up to Dribble</h1>
            <p className='warning-text'>{submissionText}</p>
            <form className='form-bg' onSubmit={handleSubmit}>
                <div className='name-bg flex flex-col'>
                    <label className='cursor-pointer' htmlFor='nameId'>Name</label>
                    <input type='text' id='nameId'
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className='form-control'
                     placeholder='Enter Your Name' />
                     <p className='error-text'>{validationErrors.name}</p>
                </div>
                <div className='username-bg flex flex-col'>
                    <label className='cursor-pointer' htmlFor='usernameId'>User Name</label>
                    <input type='text' id='usernameId'
                     className='form-control'
                     name="username"
                     value={formData.username}
                     onChange={handleChange}
                     placeholder='Enter Your User Name' />
                     <p className='error-text'>{validationErrors.username}</p>
                </div>
                <div className='email-bg flex flex-col'>
                    <label className='cursor-pointer' htmlFor='emailId'>Email</label>
                    <input type='email' id='emailId'
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className='form-control'
                     placeholder='Enter Your Email' />
                    <p className='error-text'>{validationErrors.email}</p>
                </div>
                <div className='password-bg flex flex-col'>
                    <label className='cursor-pointer' htmlFor='passwordId'>Password</label>
                    <input type='password' id='passwordId'
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     className='form-control'
                     placeholder='6+ characters' />
                    <p className='error-text'>{validationErrors.password}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <input type='checkbox'
                     name="isChecked"
                     checked={formData.isChecked}
                     onChange={handleChange}
                     className='cursor-pointer' />
                    <p>Creating an account means you're okay with our <span>Terms of Service, Privacy Policy,</span> and our default <span>Notification Settings.</span></p>
                    <p className='error-text'>{validationErrors.isChecked}</p>
                </div>
                <button type='submit' className='btn btn-danger'>Create an Account</button>
                <p>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Notification Settings.</span></p>
            </form>
        </div>
    </div>
  )
}

export default Login

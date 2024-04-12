import { useState } from 'react'
import './index.css'


const EachOption = (props) => {
  const {eachOption}  = props
  // console.log(eachOption)
  const {image,desc,id,para} = eachOption
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`m-5 flex card
    flex-col items-center ${isChecked ? 'checked' : ''}`}>
      <img src={image}
       className={`mb-3 w-[280px] ${isChecked?"card-image":""}`}
       alt="designer"
       />     

      <div className={`flex flex-col 
      justify-center items-center text-center
       ${isChecked?"desc-card-profile":""}`}> 
        <h1 className='desc-text w-[200px] mb-3 text-[17px] font-bold'>{desc}</h1>   
        <p className='w-[250px] mb-1'>{isChecked?para:null}</p>   
        <div>
          <input type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id={id} className="select-option" />
          <label htmlFor={id}></label>
        </div>
      </div>
    </div>
  )
}

export default EachOption

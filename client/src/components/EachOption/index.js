import './index.css'


const EachOption = (props) => {
  const {eachOption}  = props
  // console.log(eachOption)
  const {image,desc,id} = eachOption
  return (
    <div className='m-5 flex card
    flex-col items-center'>
      <img src={image}
       className='mb-3'
       alt="designer" />
      <h1 className='mb-3 text-[17px] font-bold'>{desc}</h1>
      <input type="checkbox" id={id} className="select-option" />
      <label htmlFor={id}></label>
    </div>
  )
}

export default EachOption

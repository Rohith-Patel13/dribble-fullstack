import './index.css'


const EachOption = (props) => {
  const {eachOption}  = props
  // console.log(eachOption)
  const {image,desc,id} = eachOption
  return (
    <div className='m-4 flex card
    flex-col items-center'>
      <img src={image}
       className='mb-3 w-[280px]'
       alt="designer" />     
      <h1 className='desc-text w-[200px] mb-3 text-[17px] font-bold'>{desc}</h1>      
      <div>
        <input type="checkbox" id={id} className="select-option" />
        <label htmlFor={id}></label>
      </div>
    </div>
  )
}

export default EachOption

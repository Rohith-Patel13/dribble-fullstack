import './index.css'


const EachOption = (props) => {
  const {eachOption}  = props
  // console.log(eachOption)
  const {image,desc,id} = eachOption
  return (
    <div>
      <img src={image} alt="designer" />
      <h1>{desc}</h1>
      <input type="checkbox" id={id} className="select-option" />
      <label htmlFor={id}></label>
    </div>
  )
}

export default EachOption

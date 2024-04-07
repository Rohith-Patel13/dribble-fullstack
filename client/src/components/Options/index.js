import {v4 as uuidv4} from "uuid"
import './index.css'
import designer from "../../images/designer.png"
import designerInspiration from "../../images/designer-inspiration.png"
import designerHire from "../../images/hire-designer.png"
import EachOption from "../EachOption"


const options = [
  {
    id:uuidv4(),
    image:designer,
    desc:"I'm a designer looking to share my work",
    para:"With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
  },
  {
    id:uuidv4(),
    image:designerHire,
    desc:"I'm looking to hire a designer",
    para:"With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
  },
  {
    id:uuidv4(),
    image:designerInspiration,
    desc:"I'm looking for design inspiration",
    para:"With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
  },
]


const Options = () => {
  return (
    <div>
      <h1>What brings you to Dribbble?</h1>
      <p>select the options that best describes you.Don't worry,you can explore other options later</p>
      {
        options.map((eachOption)=>(
          <EachOption eachOption={eachOption} key={eachOption.id} />
        ))
      }
      <button className="btn btn-danger">Finish</button>
    </div>
  )
}

export default Options

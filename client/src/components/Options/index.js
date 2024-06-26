
import {v4 as uuidv4} from "uuid"
import {useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import Cookies from "js-cookie"
import { ActionCreators } from "../../redux/slice"
import './index.css'
import designer from "../../images/designer.png"
import designerInspiration from "../../images/designer-inspiration.png"
import designerHire from "../../images/hire-designer.png"
import EachOption from "../EachOption/index"
import Header from "../Header/index"
import backside from "../../images/backroute.png"


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

  const {clearCardArray} = ActionCreators


  const navigate= useNavigate()
  const dispatch = useDispatch()

  const checkedArrayOfCards = useSelector((state)=>{
    // console.log(state)
    const {mainSlice} = state
    const {checkedCardsArray}=mainSlice
    return checkedCardsArray
  })
  
  
  const backButtonClicked =()=>{
    navigate("/profile")
    dispatch(clearCardArray())
  }

  const finishButtonClicked = ()=>{
    navigate("/")
    dispatch(clearCardArray())
  }

  const logoutClicked =()=>{
    Cookies.remove("jwtToken")
    Cookies.remove("imageurl")
    Cookies.remove("email")
    navigate("/login")
  }
 
  return (
    <div>
      <div className="flex items-center">
        <Header />
        <img src={backside}
         className="cursor-pointer"
         alt="backside" 
         onClick={backButtonClicked}
         />
         <button className="ml-3 btn btn-danger"
         onClick={logoutClicked}
         >Logout</button>
      </div>

      <div className="options-bg text-center">
        <h1 className="text-4xl font-bold mb-2">What brings you to Dribbble?</h1>
        <p className="text-slate-500 mb-[90px]">Select the options that best describes you. Don't worry,you can explore other options later</p>

        <div className="flex flex-wrap justify-center items-center main-options-bg mt-3 mb-5">
          {
            options.map((eachOption)=>(
              <EachOption
               
               eachOption={eachOption} key={eachOption.id} />
            ))
          }
        </div>

  
        {
          checkedArrayOfCards.length>0 && checkedArrayOfCards.length<=2  && (
          <p className="mb-3 font-bold">Anything else? You can select multiple</p>
          )
        }
                       



        {
          checkedArrayOfCards.length>0 ? (
            <button className="btn btn-danger w-[200px]"
            onClick={finishButtonClicked}
            >Finish</button>
          ):(
            <button className="btn btn-danger finish-options w-[200px]"
            // onClick={finishButtonClicked} --> disabled if options not selected
            >Finish</button>
          )
        }

        {
          checkedArrayOfCards.length>0 && (
          <p className="mt-1 mb-3 text-slate-400 cursor-pointer font-bold">or Press RETURN</p>
          )
        }
      </div>

    </div>
  )
}

export default Options

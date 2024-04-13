import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    /*
    loginUserData:{},
    uploadedImage:"",
    */
   checkedCardsArray:[]
    
}

const SliceReducer = createSlice({
  name: 'slice',
  initialState,
  reducers: {

    checkedCards:(previousState,action)=>{
      // console.log(previousState,action)
      previousState.checkedCardsArray.push(action.payload.checkedId)
    },


    unCheckCards:(previousState,action)=>{
      console.log(previousState,action)
      previousState.checkedCardsArray=previousState.checkedCardsArray.filter((eachId)=>(
        action.payload.unCheckedId!==eachId
      ))
    }

    /*
    loggedInUserData:(previousState,action)=>{
        previousState.loginUserData=action.payload
    },
    imageUploaded:(previousState,action)=>{
        previousState.uploadedImage=action.payload.imageUrl
    }
    */

  },
})

// Action creators are generated for each case reducer function
export const ActionCreators  = SliceReducer.actions
const reducerSlice = SliceReducer.reducer
export default reducerSlice

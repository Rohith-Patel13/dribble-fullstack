import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginUserData:{},
    uploadedImage:"",
}

const SliceReducer = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    loggedInUserData:(previousState,action)=>{
        previousState.loginUserData=action.payload
    },
    imageUploaded:(previousState,action)=>{
        previousState.uploadedImage=action.payload.imageUrl
    }

  },
})

// Action creators are generated for each case reducer function
export const ActionCreators  = SliceReducer.actions
const reducerSlice = SliceReducer.reducer
export default reducerSlice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userdata: null,
}

export const userdataSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
   
    addUserData: (state, action) => {
      state.userdata = action.payload
    },
    resetUserData:(state)=>{
        state.userdata=null
    }

  },
})

// Action creators are generated for each case reducer function
export const selectLoggedInUser = (state) => state.userinfo.userdata;
export const { addUserData, resetUserData } = userdataSlice.actions

export default userdataSlice.reducer
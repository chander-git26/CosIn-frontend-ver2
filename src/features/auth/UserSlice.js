import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userinfo: null,
}

export const userdataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
   
    addUserData: (state, action) => {
      state.userinfo = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const selectLoggedInUser = (state) => state.userdata.userinfo;
export const { addUserData } = userdataSlice.actions

export default userdataSlice.reducer
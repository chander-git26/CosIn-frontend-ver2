import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from '../features/auth/UserSlice'
export const store = configureStore({
  reducer: {
    userinfo:userInfoReducer
  },
})
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import userReducer from './reducers/UserSlice'
import userInfoReducer from './reducers/UserInfoSlice'


const rootReducer = combineReducers({
  userReducer,
  userInfoReducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
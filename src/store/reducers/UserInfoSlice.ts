import {createSlice} from "@reduxjs/toolkit";

import {User} from "../../types/User";

interface UserState {
    user: User | null;
    isPreview: boolean
}

const initialState: UserState = {
    user: null,
    isPreview: false
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      openInfo(state, action) {
        state.user = action.payload;
        state.isPreview = true
      },
      close(state, action) {
        state.user = action.payload;
        state.isPreview = false
      }
    },
})

export default userInfoSlice.reducer;
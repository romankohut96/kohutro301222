import {createSlice } from "@reduxjs/toolkit";

import {User} from "../../types/User";
import usersData from '../../initData.json'


interface UserState {
    users: User[];
    isFullList: boolean
}

const initialState: UserState = {
    users: usersData.filter((_, index) => index <3 ),
    isFullList: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      fetchAllUsers(state, action) {
        state.users = usersData;
        state.isFullList = action.payload
      } 
    },
})

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { IAppUser } from "../interfaces/IAppusers";

export type ILoggedUser = {
    user: IAppUser | null
    isUserLoggedIn: boolean;
}

let initializeState: ILoggedUser = {
    user: null,
    isUserLoggedIn: false
}

// check if user exist in localStorage and he is logged in
const localStorageUser: string | null = localStorage.getItem('loggedUser');
if(localStorageUser) {
    const parsedUser: ILoggedUser = JSON.parse(localStorageUser);
    initializeState = {
        user: parsedUser.user,
        isUserLoggedIn: parsedUser.isUserLoggedIn
    }
}

console.log(initializeState);

const userSlice = createSlice({
    name: 'user',
    initialState: initializeState,
    reducers: {
        logInUser: (state, action: PayloadAction<ILoggedUser>) => {
            // get specific user data and add him to global state and to localstorage
            state.isUserLoggedIn = action.payload.isUserLoggedIn;
            state.user = action.payload.user;
            localStorage.setItem('loggedUser', JSON.stringify(action.payload));
        },
        logOutUser: (state, action: PayloadAction<ILoggedUser>) => {
            state.isUserLoggedIn = action.payload.isUserLoggedIn;
            state.user = action.payload.user
            localStorage.removeItem("loggedUser");
        }
    }
})

export const {logInUser, logOutUser}  = userSlice.actions;
export const selectOrder = (state: RootState) => state.user;
export default userSlice.reducer;
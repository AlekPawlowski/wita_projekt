import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./";
import { accesLevel } from "../interfaces/IAppusers";

export type ILoggedUser = {
    isUserLoggedIn: boolean;
    userEmail: string;
    userAccessLevel: accesLevel | "";
}
type IUserState = {
    user: ILoggedUser
}

let initializeState: IUserState = {
    user: {
        isUserLoggedIn: false,
        userEmail: "",
        userAccessLevel: "",
    }
}

// check if user exist in localStorage and he is logged in
const localStorageUser: string | null = localStorage.getItem('loggedUser');
if(localStorageUser) {
    const parsedUser: ILoggedUser = JSON.parse(localStorageUser);
    initializeState = {
        user: parsedUser
    }
}

console.log(initializeState);

const userSlice = createSlice({
    name: 'user',
    initialState: initializeState,
    reducers: {
        logInUser: (state, action: PayloadAction<ILoggedUser>) => {
            // get specific user data and add him to global state and to localstorage
            state.user = action.payload;
            localStorage.setItem('loggedUser', JSON.stringify(action.payload));
        },
        logOutUser: (state, action: PayloadAction<ILoggedUser>) => {
            state.user = action.payload;
            localStorage.removeItem("loggedUser");
        }
    }
})

export const {logInUser, logOutUser}  = userSlice.actions;
export const selectOrder = (state: RootState) => state.user.user;
export default userSlice.reducer;
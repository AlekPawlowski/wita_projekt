import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./";
import type {User, Session} from '@supabase/supabase-js';
import { supabase } from "../config";
import { IAppUsers } from "../interfaces/IAppusers";

type  IUserPayload = {
    user: User,
    session: Session
}

type ILoggedUser = {
    isUserLoggedIn: boolean;
    userEmail: string;
    userAccessLevel: string;
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
        logInUser: (state, action: PayloadAction<IUserPayload>) => {
            // get specific user data and add him to global state and to localstorage
            const email = action.payload.user.email;
            const loggedUserData = async () => {
                const { data: app_users } = await supabase
                    .from('app_users')
                    .select("*")
                    .eq('email', email)

                // set logged user
                if(app_users){
                    const {email,acces_level} = app_users[0];
                    const user: ILoggedUser = {
                        isUserLoggedIn: true,
                        userEmail: email,
                        userAccessLevel: acces_level
                    };
                    localStorage.setItem('loggedUser', JSON.stringify(user));
                }
            }
            loggedUserData()
        }
    }
})

export const {logInUser}  = userSlice.actions;
export const selectOrder = (state: RootState) => state.user.user;
export default userSlice.reducer;
import { Button } from "@chakra-ui/react"
import { Fragment } from "react"
import { supabase } from "../../config"
import { ILoggedUser, logOutUser } from "../../redux/userSlice"
import { useDispatch } from "react-redux"

export const LogOutElement = () =>{
    const dispatch = useDispatch();
    const logOut = async () => {
        // console.log("clicked log out button");
        const { error } = await supabase.auth.signOut();
        if(error){
            throw new Error(`error ${error}`)
        } 
        const emptyUser:ILoggedUser = {
            isUserLoggedIn: false,
            user: null
        }
        dispatch(logOutUser(emptyUser))
    }
    return <Fragment>
        <Button 
            onClick={logOut}
            display={"inline-block"}
        >
            Log out
        </Button>
    </Fragment>
}
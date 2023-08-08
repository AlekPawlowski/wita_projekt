import { Fragment } from "react"
import { useSelector } from "react-redux"
import { LogInScreen } from "../LogIn/LogInScreen";
import { HomePage } from "../HomePage/HomePage";

export const StartPage = () => {
    const state = useSelector((state) => state.user);
    const {isUserLoggedIn, user} = state;

return <Fragment>
        {
            isUserLoggedIn ? 
                <HomePage user={user} />
                : <LogInScreen />
        }
    </Fragment>
}
import { Fragment } from "react"
import { useSelector } from "react-redux"
import { LogInScreen } from "./LogInScreen";
import { HomePage } from "./HomePage";

export const StartPage = () => {
    const state = useSelector((state) => state.user.user);
    const {isUserLoggedIn, userAccessLevel, userEmail} = state;

    return <Fragment>
        {
            isUserLoggedIn ? 
                <HomePage email={userEmail} accesLevel={userAccessLevel} />
                : <LogInScreen />
        }
    </Fragment>
}
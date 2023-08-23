import { Fragment } from "react"
import { useSelector } from "react-redux"
import { LogInScreen } from "../LogIn/LogInScreen";
import { HomePage } from "../HomePage/HomePage";
import { RootState } from "../../redux";

export const StartPage = () => {
    const state = useSelector((state: RootState) => state.user);
    const { isUserLoggedIn, user } = state;

    if (!isUserLoggedIn || !user) return <LogInScreen />;

    return <Fragment>
        <HomePage user={user} />
    </Fragment>
}